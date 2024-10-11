const createHttpError = require("http-errors");
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getContact = asyncHandler(async(req, res) => {
    const contacts = await Contact.find()
    res.json(contacts);
});

const getOneContact = asyncHandler(async(req, res, next) => {
    // const contact = await Contact.findById(req.params.id);
    // if(!contact) return next(createHttpError(404, "Contact not found"));
    res.json(contact);
});

const createContact = asyncHandler(async(req, res, next) => {
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        return next(createHttpError(400, "Fields are required"));
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    });
        res.status(201).json(contact);
});

const updateContact = asyncHandler(async(req, res) => {
    res.json({message:`Update the contacts ${req.params.id}`});
});

const deleteContact = asyncHandler(async(req, res) => {
    res.json({message:`Delete the contacts ${req.params.id}`});
});

module.exports = {getContact, createContact, updateContact, deleteContact, getOneContact};