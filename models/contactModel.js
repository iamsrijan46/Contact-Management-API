const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: (true, "Please enter the name of the contact")
    },
    email: {
        type: String,
        required: (true, "Please enter the email address of the contact"),
        unique: true
    },
    phone: {
        type: String,
        required: (true, "Please enter the phone number of the contact"),
        unique: true
    },
}, {timestamps: true});

module.exports = mongoose.model('Contact', contactSchema);