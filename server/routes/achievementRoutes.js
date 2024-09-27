const express = require('express');
const router = express.Router();
const achievementController = require('../controllers/achievementController');

// Unlock an achievement for a user
router.post('/unlock', achievementController.unlockAchievement);

// Get all achievements for a user
router.get('/:userId', achievementController.getAchievements);

// Create a new achievement (admin)
router.post('/create', achievementController.createAchievement);

module.exports = router;
