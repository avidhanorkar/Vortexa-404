const Badge = require('../models/badgeModel');
const User = require("../models/userModel")

// Award a badge to a user
exports.awardBadge = async (req, res) => {
  const { user_id, badge_id } = req.body;

  try {
    const user = await User.findById(user_id);
    user.badges.push({ badge_id });
    await user.save();
    res.status(200).json({ message: 'Badge awarded successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all badges
exports.getBadges = async (req, res) => {
  try {
    const badges = await Badge.find();
    res.status(200).json(badges);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// You might want to implement the other badge controller functions as well
exports.getBadgeById = async (req, res) => {
  try {
    const badge = await Badge.findById(req.params.id);
    if (!badge) {
      return res.status(404).json({ error: 'Badge not found' });
    }
    res.status(200).json(badge);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createBadge = async (req, res) => {
  const { name, description } = req.body;
  
  try {
    const badge = new Badge({ name, description });
    await badge.save();
    res.status(201).json(badge);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};