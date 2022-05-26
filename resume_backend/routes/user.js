const userCntrl = require('../controllers/user');
const {verifyUser} = require('../middleware/userAuth');
const express = require('express');
const router = express.Router();

router.post('/register',userCntrl.addUser);
router.post('/login',userCntrl.logInUser);
router.get('/getUser',verifyUser,userCntrl.getUser);

module.exports = router;