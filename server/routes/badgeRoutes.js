const express = require('express');
const router = express.Router();
const badgeController = require('../controllers/badgeController');

// Award a badge to a user
router.post('/award', badgeController.awardBadge);

// Get all available badges
router.get('/', badgeController.getBadges);

// Get a single badge by ID
router.get('/:id', badgeController.getBadgeById);

// Create a new badge (admin)
router.post('/create', badgeController.createBadge);

module.exports = router;
