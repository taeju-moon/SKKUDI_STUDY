const router = require('express').Router();
const {
  getUser,
  createUser,
  updateUser,
  getAllUsers,
  deleteUser,
} = require('../controllers/userController');

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
