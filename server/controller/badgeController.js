const Badge = require('../models/badge');

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
