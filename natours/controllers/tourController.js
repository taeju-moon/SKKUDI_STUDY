const Tour = require('../models/tour');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');

// param middleware <- 기억하기!!!

const getAllTours = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Tour.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const tours = await features.query; //await를 하면 query를 실행하는 것임.

  //SEND RESPONSE
  res.status(200).json({
    status: 'success',
    data: {
      tours,
    },
  });
});

const getTour = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const tour = await Tour.findById(id);
  res.status(200).json({
    status: 'success',
    data: { tour },
  });
});

const createTour = catchAsync(async (req, res, next) => {
  const newTour = await Tour.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      tour: newTour,
    },
  });
});

const updateTour = catchAsync(async (req, res, next) => {
  const newTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true, //이러면 덮어쓰기가 됨.
    runValidators: true,
  });
  res.status(200).json({
    status: 'success',
    data: {
      tour: newTour,
    },
  });
});

const deleteTour = catchAsync(async (req, res, next) => {
  await Tour.findByIdAndRemove(req.params.id);
  res.status(200).json({ status: 'success', data: null });
});

//aggregation pipeline & aggregation pipeline operators
const getTourStatistics = catchAsync(async (req, res, next) => {
  const stats = await Tour.aggregate([
    {
      $match: { rating: { $gte: 0.0 } },
    },
    {
      $group: {
        _id: '$difficulty', //difficulty를 기준으로 그룹화
        numOfRatings: { $sum: '$ratingsQuantity' },
        numOfTours: { $sum: 1 },
        avgRating: { $avg: '$rating' },
        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' },
      }, //id: null -> 모든 Tour을 한번에 그룹화
    },
    {
      $sort: { avgPrice: 1 }, //1 오름차순 0 내림차순
    },
  ]);
  res.status(200).json({
    status: 'success',
    data: { stats },
  });
});

//aggregation pipeline & aggregation pipeline operators
const getMonthlyPlan = catchAsync(async (req, res, next) => {
  const year = req.params.year * 1;
  const plan = await Tour.aggregate([
    {
      $unwind: '$startDates', //startDates를 기준으로 documents들을 분할
    },
    {
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`),
        },
      },
    },
    {
      $group: {
        _id: { $month: '$startDates' },
        numTourStarts: { $sum: 1 },
        tours: { $push: '$name' },
      },
    },
    {
      $addFields: { month: '$_id' },
    },
    {
      $project: {
        _id: 0, //id를 지울것임
      },
    },
    {
      $sort: { numTourStarts: -1 },
    },
  ]);
  res.status(200).json({
    status: 'success',
    data: { plan },
  });
});

const aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = 'price,-rating';
  req.query.fields = 'name,price,rating,summary,difficulty';
  next();
};

module.exports = {
  getAllTours,
  getTour,
  createTour,
  deleteTour,
  updateTour,
  getTourStatistics,
  getMonthlyPlan,
  aliasTopTours,
};
