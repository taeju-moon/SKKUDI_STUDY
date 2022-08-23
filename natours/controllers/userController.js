const getAllUsers = (req, res) => {
  res.status(500).json({ status: 'fail', message: 'Server error' });
};

const getUser = (req, res) => {
  res.status(500).json({ status: 'fail', message: 'Server error' });
};

const createUser = (req, res) => {
  res.status(500).json({ status: 'fail', message: 'Server error' });
};

const updateUser = (req, res) => {
  res.status(500).json({ status: 'fail', message: 'Server error' });
};

const deleteUser = (req, res) => {
  res.status(500).json({ status: 'fail', message: 'Server error' });
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser, getUser };
