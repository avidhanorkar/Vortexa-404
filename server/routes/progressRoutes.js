const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');

// Update progress for a user in a course
router.put('/update', progressController.updateProgress);

// Get progress of a user in a specific course
router.get('/:userId/:courseId', progressController.getProgress);

module.exports = router;
