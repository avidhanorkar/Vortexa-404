const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: [
    {
      type: {
        type: String,
        enum: ['module', 'quiz', 'video'],
        required: true
      },
      content: { type: String, required: true },  // Module text, quiz JSON, or video URL
      order: { type: Number, required: true }
    }
  ]
});

module.exports = mongoose.model('Course', courseSchema);
