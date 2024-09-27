const Achievement = require('../models/achievementModel');

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


// Get all achievements for a user
exports.getAchievements = async (req, res) => {
  const { userId } = req.params;

  try {
    // Find the user's progress record to get achievements
    const progress = await Progress.findOne({ user_id: userId });
    if (!progress) {
      return res.status(404).json({ error: 'Progress record not found' });
    }

    res.status(200).json(progress.achievements);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Create a new achievement (admin)
exports.createAchievement = async (req, res) => {
  const { title, description } = req.body;

  try {
    const achievement = new Achievement({ title, description });
    await achievement.save();
    res.status(201).json(achievement);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};