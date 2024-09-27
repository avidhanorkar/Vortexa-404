const express = require('express');
const router = express.Router();

// Import all individual routes
const userRoutes = require('./userRoutes');
const courseRoutes = require('./courseRoutes');
const progressRoutes = require('./progressRoutes');
const badgeRoutes = require('./badgeRoutes');
const achievementRoutes = require('./achievementRoutes');
const leaderboardRoutes = require('./leaderboardRoutes');

// Set up base routes for each controller
router.use('/users', userRoutes);
router.use('/courses', courseRoutes);
router.use('/progress', progressRoutes);
router.use('/badges', badgeRoutes);
router.use('/achievements', achievementRoutes);
router.use('/leaderboard', leaderboardRoutes);

module.exports = router;
