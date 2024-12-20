const express = require('express');
const router = express.Router();
const { fetchTrends } = require('../controllers/trendController');

router.post('/fetch', fetchTrends);

module.exports = router;