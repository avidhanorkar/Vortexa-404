const express = require('express');
const router = express.Router();
const leaderboardController = require('../controllers/leaderboardController');

// Get leaderboard for a specific course
router.get('/:courseId', leaderboardController.getLeaderboard);

// Update leaderboard (e.g., after a quiz or course completion)
router.post('/update', leaderboardController.updateLeaderboard);

module.exports = router;
