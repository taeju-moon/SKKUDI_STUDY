class APIFeatures {
  constructor(query, queryString) {
    //query: Tour.find() 이고, queryString: {sort=price}이런거임
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    //1-1. page와 같은 query를 삭제한다.(Filtering)
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((field) => delete queryObj[field]);

    //1-2. ADVANCED FILTERING
    let queryString = JSON.stringify(queryObj);
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );

    this.query = this.query.find(JSON.parse(queryString));

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v'); //-를 붙이면 해당 필드를 제외한다.
    }

    return this;
  }

  paginate() {
    const page = this.queryString.page ? this.queryString.page * 1 : 1; //1을 default값으로 사용
    const limit = this.queryString.limit ? this.queryString.limit * 1 : 100; //100을 default값으로 사용
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

module.exports = APIFeatures;
