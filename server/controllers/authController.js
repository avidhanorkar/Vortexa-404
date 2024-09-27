const User = require('../models/user');
const passport = require('passport');

// Handle user signup
exports.signup = (req, res) => {
    // Extract the role from the request body
    const { username, email, password, role } = req.body;

    // Check if the role is valid
    if (!['teacher', 'student'].includes(role)) {
        return res.status(400).send('Invalid role');
    }

    // Register the user with role
    User.register(new User({ username, email, role }), password, (err, user) => {
        if (err) {
            return res.status(400).send(err.message);
        }
        passport.authenticate('local')(req, res, () => {
            res.redirect('/dashboard');
        });
    });
};

// Handle user login
exports.login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect('/auth/login');
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            return res.redirect('/dashboard');
        });
    })(req, res, next);
};

// Handle user logout
// Handle user logout
exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).send('Error logging out');
        }
        res.redirect('/');
    });
};

