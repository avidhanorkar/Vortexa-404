const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherProfileSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',  // Reference to the User model
        required: true
    },
    quizzesCreated: [{
        type: Schema.Types.ObjectId,
        ref: 'Quiz'
    }],
    assignmentsCreated: [{
        type: Schema.Types.ObjectId,
        ref: 'Assignment'
    }]
}, { timestamps: true });

module.exports = mongoose.model('TeacherProfile', teacherProfileSchema);
