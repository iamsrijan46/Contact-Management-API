const createHttpError = require("http-errors");
const asyncHandler = require("async-handler");

const getContact = asyncHandler(async(req, res) => {
    res.json({message:"Get all contacts"});
});

const getOneContact = asyncHandler(async(req, res) => {
    res.json({message:`Get contacts for ${req.params.id}`});
});

const createContact = asyncHandler(async(req, res, next) => {
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        return next(createHttpError(400, "Fields are required"));
    }else{
        console.log("The data is --> ", req.body);
    }

    res.json({message:"Create contact"});
});

const updateContact = asyncHandler(async(req, res) => {
    res.json({message:`Update the contacts ${req.params.id}`});
});

const deleteContact = asyncHandler(async(req, res) => {
    res.json({message:`Delete the contacts ${req.params.id}`});
});

module.exports = {getContact, createContact, updateContact, deleteContact, getOneContact};