const Achievement = require('../models/achievement');

// Unlock an achievement
exports.unlockAchievement = async (req, res) => {
  const { user_id, achievement_id } = req.body;

  try {
    const progress = await Progress.findOne({ user_id, course_id: req.params.courseId });
    progress.achievements.push({ achievement_id });
    await progress.save();
    res.status(200).json({ message: 'Achievement unlocked' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
