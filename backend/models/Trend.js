const mongoose = require('mongoose');

const trendSchema = mongoose.Schema({
  industry: String,
  cpc: Number,
  ctc: Number,
}, { timestamps: true });

module.exports = mongoose.model('Trend', trendSchema);