const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    res.json({message:"Get all contacts"});
});
router.get('/:id', (req, res) => {
    res.json({message:`Get contacts for ${req.params.id}`});
});
router.post('', (req, res) => {
    res.json({message:"Create contact"});
});
router.put('/:id', (req, res) => {
    res.json({message:`Update the contacts ${req.params.id}`});
});
router.delete('/:id', (req, res) => {
    res.json({message:`Delete the contacts ${req.params.id}`});
});

module.exports = router;