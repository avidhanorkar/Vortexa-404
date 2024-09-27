const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,  // Text content for the assignment
        required: true
    },
    note: {
        type: String,  // Optional special description or additional details
        default: ''
    },
    dueDate: {
        type: Date,
        required: true
    },
    points: {
        type: Number,  // Points for completing the assignment
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'TeacherProfile',  // References the teacher who created the assignment
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Assignment', assignmentSchema);
