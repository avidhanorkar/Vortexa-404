const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  criteria: [
    {
      type: String,
      required: true  // Criteria for earning this achievement, e.g., "Finish course in 1 week"
    }
  ]
});

module.exports = mongoose.model('Achievement', achievementSchema);
