const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Render signup page
router.get('/signup', (req, res) => {
    res.send('<h1>Signup Page</h1>'); // Replace with actual signup form
});

// Handle signup form submission
router.post('/signup', authController.signup);

// Render login page
router.get('/login', (req, res) => {
    res.send('<h1>Login Page</h1>'); // Replace with actual login form
});

// Handle login form submission
router.post('/login', authController.login);

// Handle logout
router.get('/logout', authController.logout);

module.exports = router;
