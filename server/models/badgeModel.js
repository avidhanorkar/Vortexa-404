const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String },  // URL to the badge icon
  criteria: { type: String, required: true }  // E.g., "Complete 5 modules", "Score 90%"
});

module.exports = mongoose.model('Badge', badgeSchema);
