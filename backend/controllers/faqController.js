const FAQ = require('../models/FAQ');

const getAnswer = async (req, res) => {
  const { question } = req.body;

  
  if(!question) 
    return res.status(400).json({ message: "Question is required" });
 
  const answer = "Improve ad performance by focusing on targeted audiences and optimizing ad creatives.";

  try{
    const newFAQ = new FAQ({
      question,
      answer,
      createdAt: new Date()
    });

    await newFAQ.save(); 

    res.status(200).json({
      message: "FAQ saved successfully",
      question,
      answer
    });
  } 
  catch(error){
    // console.error("Error saving FAQ:", error);
    res.status(500).json({ message: "Error saving FAQ" });
  }
};

module.exports = { getAnswer };