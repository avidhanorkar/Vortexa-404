const User = require('../models/user');

// Create new user
exports.createUser = async (req, res) => {
  const { username, email, role } = req.body;
  const userData = { username, email, role };

  if (role !== 'admin') {
    userData.experience_points = 0;
    userData.level = 1;
    userData.badges = [];
    userData.enrolled_courses = [];
    userData.completed_courses = [];
  }

  try {
    const user = new User(userData);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ error: 'User not found' });
  }
};

// Update user progress (for students)
exports.updateUserProgress = async (req, res) => {
  const { progress } = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { progress }, { new: true });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
