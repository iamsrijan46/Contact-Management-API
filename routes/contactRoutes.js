const express = require('express');
const router = express.Router();
const {getContact, createContact, updateContact, deleteContact, getOneContact} = require("../controllers/contactController");
const verifyToken = require('../middlewares/validator');

router.get('/', getContact);
router.get('/:id', getOneContact);
router.post('/',verifyToken, createContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

module.exports = router;