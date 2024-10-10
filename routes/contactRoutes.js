const express = require('express');
const router = express.Router();
const {getContact, createContact, updateContact, deleteContact, getOneContact} = require("../controllers/contactController");

router.get('/', getContact);
router.get('/:id', getOneContact);
router.post('/', createContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

module.exports = router;