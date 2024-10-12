const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const createHttpError = require('http-errors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middlewares/validator');

const createUser = asyncHandler(async(req, res, next) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password) {
        return next(createHttpError(400, "All fields are required"));
    }

    const existingUser = await User.findOne({ email });
    if(existingUser){
        return next(createHttpError(409, "Email already exists"));
    }

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

const loginUser = asyncHandler(async(req, res, next) => {
    const {email, password} = req.body;
    if(!email || !password){
        return next(createHttpError(400, "Fields are required"));
    }
    const user = await User.findOne({email});
    if(!user || !(await bcrypt.compare(password, user.password))){
        return next(createHttpError(401, "Invalid credentials"));
    }else{
        const accessToken = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET, { expiresIn: '1h'});
        res.status(200).json({accessToken});
    }
});

const currentUser = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        return next(createHttpError(401, "Unauthorized"));
    }
    res.json(req.user);
});

module.exports = {createUser, currentUser, loginUser};