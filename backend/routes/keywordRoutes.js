const express = require('express');
const { generateKeywords } = require('../controllers/keywordController');

const router = express.Router();

router.post('/generate', generateKeywords);

module.exports = router;