const router = require('express').Router();
const {
  createTour,
  getAllTours,
  getTour,
  updateTour,
  deleteTour,
  getTourStatistics,
  getMonthlyPlan,
  aliasTopTours,
} = require('../controllers/tourController');

//param middleware: 특정한 param에만 반응하는 미들웨어
//router.param('id', isIdValid);

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);
router.route('/monthly-plan/:year').get(getMonthlyPlan);
router.route('/tour-stats').get(getTourStatistics);
router.route('/').get(getAllTours).post(createTour); //(checkBody, createTour) 이렇게 다수의 미들웨어 사용가능
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
