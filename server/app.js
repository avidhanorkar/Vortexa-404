<<<<<<< HEAD
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const User = require('./models/user');
const authRoutes = require('./routes/auth'); // Import auth routes
const app = express();

// Database connection
mongoose.connect('mongodb://localhost:27017/team404')
.then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Error connecting to MongoDB:', err);
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Passport.js Local Strategy
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Mount the auth routes
app.use('/auth', authRoutes); // All auth routes will start with /auth

// Example of a protected route
app.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
        res.send('Welcome to your dashboard!');
    } else {
        res.redirect('/auth/login');
    }
});

// Port configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
=======
//console
>>>>>>> 563bd4dcb50cbc7218c6adf1885f2476da99608b
