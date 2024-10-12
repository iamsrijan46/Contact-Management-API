const createHttpError = require("http-errors");
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getContact = asyncHandler(async(req, res) => {
    const contacts = await Contact.find({user_id: req.user.id});
    res.json(contacts);
});

const getOneContact = asyncHandler(async(req, res, next) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) return next(createHttpError(404, "Contact not found"));
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
        phone,
        user_id: req.user.id
    });
        res.status(201).json(contact);
});

const updateContact = asyncHandler(async(req, res, next) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) return next(createHttpError(404, "Contact not found"));

    if(contact.user_id.toString == req.user.id){
        return next(createHttpError(403, "Unauthorized to update this contact"));
    }

    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )

    res.json(updateContact);
});

const deleteContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) return next(createHttpError(404, "Contact not found"));

    if(contact.user_id.toString == req.user.id){
        return next(createHttpError(403, "Unauthorized to update this contact"));
    }

    await Contact.findByIdAndDelete(req.params.id);
    res.json(contact);
});

module.exports = {
    getContact, createContact, updateContact, deleteContact, getOneContact
};