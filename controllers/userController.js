const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const createHttpError = require('http-errors');
const bcrypt = require('bcrypt');

const createUser = asyncHandler(async(req, res, next) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password) {
        return next(createHttpError(400, "All fields are required"));
    }

    const existingUser = await User.findOne({ email });
    if(existingUser){
        return next(createHttpError(409, "Email already exists"));
    }

    // Hash the password before saving it to the database
    const hashPassword = await bcrypt.hash(password, 10);
    console.log('The hash password is', hashPassword);

    const user = await User.create({
        username,
        email,
        password: hashPassword,
    });
    console.log(`user creates ${user}`);
     

    if(user){
        res.status(201).json({_id: user.id, email: user.email});
    }else{
        return next(createHttpError(403, "Invalid"));
    }
});

const loginUser = asyncHandler(async(req, res) => {
    res.json({ message: "login user information" });
});

const currentUser = asyncHandler(async(req, res) => {
    res.json({ message: "current user information" });
});

module.exports = {createUser, currentUser, loginUser};