const express = require('express');
const { getAnswer } = require('../controllers/faqController');

const router = express.Router();

router.post('/answer', getAnswer);

module.exports = router;