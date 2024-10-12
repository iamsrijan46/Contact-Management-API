const express = require("express");
const router = express.Router();

const { createUser, loginUser, currentUser } = require("../controllers/userController");

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/current', currentUser);

module.exports = router;