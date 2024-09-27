const Leaderboard = require('../models/leaderboard');

// Get leaderboard for a course
exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Leaderboard.find({ course_id: req.params.courseId }).sort({ points: -1 });
    res.status(200).json(leaderboard);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
