const express = require('express');
const router = express.Router();
const verifyUser = require('../middleware/userAuth');
const resumeCtrl = require('../controllers/resume');

router.post('/createResume',verifyUser,resumeCtrl.createResume);

module.exports = router;
