const Keyword = require('../models/Keyword');

const generateKeywords = async (req, res) => {
  const { industry, objective, website, socialMedia, ppcCampaigns, audience, location } = req.body;

  const keywords = [`${industry} marketing`, `${objective} strategies`, `${audience} engagement`];

  const keywordData = new Keyword({
    industry, objective, website, socialMedia, ppcCampaigns, audience, location, generatedKeywords: keywords,
  });

  await keywordData.save();
  res.status(201).json({ success: true, keywords });
};

module.exports = { generateKeywords };