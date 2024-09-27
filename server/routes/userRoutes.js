const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user (registration)
router.post('/create', userController.createUser);

// User login route
router.post('/login', userController.loginUser);

// User logout route
router.post('/logout', userController.logoutUser);

// Get a user by ID
router.get('/:id', userController.getUserById);

// Update user progress (for students)
router.put('/:id/progress', userController.updateUserProgress);

// Delete a user
router.delete('/:id', userController.deleteUser);

module.exports = router;