const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: [true, "Please enter the name of the contact"]
    },
    email: {
        type: String,
        required: [true, "Please enter the email address of the contact"],
        unique: true
    },
    phone: {
        type: String,
        required: [true, "Please enter the phone number of the contact"],
        unique: true
    },
}, {timestamps: true});

module.exports = mongoose.model('Contact', contactSchema);