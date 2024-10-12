const express = require("express");
const router = express.Router();
const verifyToken = require('../middlewares/validator');
const { createUser, loginUser, currentUser } = require("../controllers/userController");

// router.use(verifyToken);
router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/current',verifyToken, currentUser);

module.exports = router;