const asyncHandler = require('express-async-handler');

const createUser = asyncHadler(async(req, res) => {
    res.json({ message: "User registered successfully" });
});

const loginUser = asyncHadler(async(req, res) => {
    res.json({ message: "login user information" });
});

const currentUser = asyncHadler(async(req, res) => {
    res.json({ message: "current user information" });
});

module.exports = {createUser, currentUser, loginUser};