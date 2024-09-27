const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user (registration)
router.post('/create', userController.createUser);

// Get a user by ID
router.get('/:id', userController.getUserById);

// Update user progress (for students)
router.put('/:id/progress', userController.updateUserProgress);

// Delete a user
router.delete('/:id', userController.deleteUser);

module.exports = router;
