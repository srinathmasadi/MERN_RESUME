const userCntrl = require('../controllers/user');
const express = require('express');
const router = express.Router();

router.post('/register',userCntrl.addUser);
router.post('/login',userCntrl.logInUser);

module.exports = router;