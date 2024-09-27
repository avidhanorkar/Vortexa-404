const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  ranking: { type: Number, required: true },  // Ranking position in the leaderboard
  points: { type: Number, required: true }  // Points based on XP or performance in quizzes, etc.
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);
