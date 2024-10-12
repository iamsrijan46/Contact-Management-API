const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const createHttpError = require('http-errors');
const User = require('../models/userModel');

const verifyToken = asyncHandler(async(req, res, next) => {
    let token;
    let authHeader = req.headers.authorization;
    if(authHeader && authHeader.startsWith('Bearer')){
        token = authHeader.split(' ')[1];

        if(!token){
            return next(createHttpError(401, "No token provided"));
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id).select('-password'); // Exclude password

        if (!user) {
            return next(createHttpError(404, "User not found"));
        }

        req.user = user;
        next();
    }
});

module.exports = verifyToken;