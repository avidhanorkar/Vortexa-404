const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['teacher', 'student'],
        required: true
    }
});

// Passport-Local Mongoose will handle username and password
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
