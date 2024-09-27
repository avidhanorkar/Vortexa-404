const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ["student", "admin"], required: true },
    experience_points: { type: Number, default: 0 },
    level: { type: Number, default: 1 },
    badges: [
        {
            badge_id: { type: mongoose.Schema.Types.ObjectId, ref: "Badge" },
            awarded_at: { type: Date, default: Date.now },
        },
    ],
    enrolled_courses: [
        {
            course_id: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
            enrolled_at: { type: Date, default: Date.now },
        },
    ],
    completed_courses: [
        {
            course_id: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
            completed_at: { type: Date, default: Date.now },
        },
    ],
});

module.exports = mongoose.model("User", userSchema);
