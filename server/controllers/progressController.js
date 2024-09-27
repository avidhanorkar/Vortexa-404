const Progress = require('../models/progressModel');

// Update user progress in course
exports.updateProgress = async (req, res) => {
  const { user_id, course_id, current_module, completion_percentage, score } = req.body;

  try {
    const progress = await Progress.findOneAndUpdate(
      { user_id, course_id },
      { current_module, completion_percentage, score },
      { new: true, upsert: true }
    );
    res.status(200).json(progress);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get progress for a user in a course
exports.getProgress = async (req, res) => {
  try {
    const progress = await Progress.findOne({ user_id: req.params.userId, course_id: req.params.courseId });
    res.status(200).json(progress);
  } catch (err) {
    res.status(404).json({ error: 'Progress not found' });
  }
};
