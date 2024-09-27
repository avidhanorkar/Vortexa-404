const Leaderboard = require('../models/leaderboardModel');

// Get leaderboard for a course
exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Leaderboard.find({ course_id: req.params.courseId }).sort({ points: -1 });
    res.status(200).json(leaderboard);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Add the updateLeaderboard function (ensure it's defined)
exports.updateLeaderboard = async (req, res) => {
  const { courseId, userId, points } = req.body;

  try {
    // Assuming you want to find and update the existing entry or create a new one
    const leaderboardEntry = await Leaderboard.findOneAndUpdate(
      { course_id: courseId, user_id: userId },
      { points },
      { new: true, upsert: true } // Create if not found
    );

    res.status(200).json(leaderboardEntry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};