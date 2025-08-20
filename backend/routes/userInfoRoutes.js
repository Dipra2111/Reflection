// routes/userInfoRoutes.js
const express = require('express');
const router = express.Router();
const { saveUserInfo } = require('../controllers/userInfoController');

router.post('/', saveUserInfo);

module.exports = router;
