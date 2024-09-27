const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    questions: [{
        questionText: {
            type: String,
            required: true
        },
        options: [{
            type: String,
            required: true
        }],
        correctAnswer: {
            type: String,
            required: true
        }
    }],
    note: {
        type: String  // Special note or description
    },
    dueDate: {
        type: Date,
        required: true
    },
    points: {
        type: Number,  // Points awarded for completing the quiz
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'TeacherProfile',  // References the teacher who created the quiz
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Quiz', quizSchema);
