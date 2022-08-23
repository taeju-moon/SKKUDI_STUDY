const mongoose = require('mongoose');

//virtual properties 공부하기
const tourSchema = mongoose.Schema(
  //mongoose validators&custom validators -> 추가적인 validators는 github에서 찾아보기
  {
    name: {
      type: String,
      required: [true, 'tour is required'], //[필수, 에러 메시지]
      unique: true, //unique는 validator는 아님
      trim: true,
      maxlenghth: [40, 'tour name max length exceeded'],
      minlength: [10, 'tour name min length not satisfied'],
    },
    duration: {
      type: Number,
      required: [true, 'durations is required'],
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'maxGroupSize is required'],
    },
    difficulty: {
      type: String,
      required: [true, 'difficulty is required'],
      enum: {
        values: ['easy', 'medium', 'difficult'], //enum: 셋 중에 하나만 됨
        message: 'Difficulty is either: easy, medium, or difficult',
      },
    },
    rating: {
      type: Number,
      default: 1.0,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0'],
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'price is required'],
    },
    //this를 사용하기에 ()=>쓰면 안됨, 매개변수가 해당 key의 value임
    priceDiscount: {
      type: Number,
      validate: {
        //this only points to current doc on NEW creation (update는 안됨)
        validator: function (value) {
          return value < this.price;
        },
        message: '할인 금액({VALUE})은 정가보다 클 수 없습니다',
      },
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'summary is required'],
    },
    imageCover: {
      type: String,
      required: [true, 'imageCover is required'],
    },
    images: {
      type: [String],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false, //get요청을 보낼때 해당 필드는 제외됨
    },
    startDates: [Date],
    secretTour: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//this를 쓰고 싶으면 arrowFunction이 아닌 진짜 function을 써야함!!!!
tourSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
}); //virtual properties

//MONGOOSE MIDDLEWARE: DOCUMENT MIDDLEWARE | trigger: .save() .create()
//여기서 this는 save하려고 하는 tour document
tourSchema.pre('save', function (next) {
  console.log(this);
  next();
});

tourSchema.post('save', function (doc, next) {
  console.log(`${this.name} saved`);
  next();
});

//QUERY MIDDLEWARE
//여기서 this는 query
tourSchema.pre(/^find/, function (next) {
  //정규식: find로 시작하는 모든것
  this.find({ secretTour: { $ne: true } });
  next();
});

tourSchema.post(/^find/, (docs, next) => {
  console.log(`${docs.length}개의 결과를 찾았습니다.`);
  next();
});

//AGGREGATION MIDDLEWARE
tourSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({
    $match: { secretTour: { $ne: true } },
  }); //unshift: array 첫번째에 요소 추가
  next();
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
