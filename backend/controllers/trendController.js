const Trend = require('../models/Trend'); 

const fetchTrends = async (req, res) => {
  const { industry } = req.body;

  if(!industry) 
    return res.status(400).json({ message: "Industry is required" });
  
  const trend = { industry, cpc: 2.5, ctc: 1.8 };

  try{
    const newTrend = new Trend({
      industry,
      cpc: trend.cpc,
      ctc: trend.ctc,
      createdAt: new Date()
    });

    await newTrend.save(); 

    res.status(200).json({
      message: "Trend data saved successfully",
      trend: newTrend
    });
  } 
  catch(error){
    // console.error("Error saving trend data:", error);
    res.status(500).json({ message: "Error saving trend data" });
  }
};

module.exports = { fetchTrends };