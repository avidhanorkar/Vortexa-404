const User = require('../models/userModel');
const passport = require('passport');

// Create new user
exports.createUser = async (req, res) => {
  const { username, email, role, password } = req.body;
  const userData = { username, email, role };

  if (role !== 'admin') {
    userData.experience_points = 0;
    userData.level = 1;
    userData.badges = [];
    userData.enrolled_courses = [];
    userData.completed_courses = [];
  }

  try {
    // Create a new user instance without password
    const newUser = new User(userData);

    // Register the user with passport-local-mongoose, passing the password separately
    await User.register(newUser, password);  // Second argument is the plain password

    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



// Login user
exports.loginUser = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);

    if (!user) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    req.logIn(user, (err) => {
      if (err) return next(err);
      res.status(200).json({ message: 'Logged in successfully', user });
    });
  })(req, res, next);
};


// Logout user
exports.logoutUser = (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ error: 'Logout failed' });
    res.status(200).json({ message: 'Logged out successfully' });
  });
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


// Ensure to add the deleteUser function
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};