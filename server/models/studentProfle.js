const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentProfileSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',  // Reference to the User model
        required: true
    },
    points: {
        type: Number,
        default: 0
    },
    achievements: {
        badges: [{
            type: String
        }],  // List of badges achieved by the student
        solvedAssignments: {
            type: Number,
            default: 0
        },
        solvedQuizzes: {
            type: Number,
            default: 0
        }
    }
}, { timestamps: true });

module.exports = mongoose.model('StudentProfile', studentProfileSchema);
