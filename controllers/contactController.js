const getContact = (req, res) => {
    res.json({message:"Get all contacts"});
}

const getOneContact = (req, res) => {
    res.json({message:`Get contacts for ${req.params.id}`});
}

const createContact = (req, res) => {
    res.json({message:"Create contact"});
}

const updateContact = (req, res) => {
    res.json({message:`Update the contacts ${req.params.id}`});
}

const deleteContact = (req, res) => {
    res.json({message:`Delete the contacts ${req.params.id}`});
}

module.exports = {getContact, createContact, updateContact, deleteContact, getOneContact};