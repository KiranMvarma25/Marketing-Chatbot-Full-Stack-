const mongoose = require('mongoose');

const keywordSchema = mongoose.Schema({
  industry: String,
  objective: String,
  website: String,
  socialMedia: [String],
  ppcCampaigns: Boolean,
  audience: String,
  location: [String],
  generatedKeywords: [String],
}, { timestamps: true });

module.exports = mongoose.model('Keyword', keywordSchema);