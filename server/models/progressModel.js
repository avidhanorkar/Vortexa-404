const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  current_module: { type: Number, default: 1 },
  completion_percentage: { type: Number, default: 0 },
  achievements: [
    {
      achievement_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Achievement' },
      unlocked_at: { type: Date, default: Date.now }
    }
  ],
  score: { type: Number, default: 0 }
});

module.exports = mongoose.model('Progress', progressSchema);
