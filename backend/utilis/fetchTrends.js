const fetch = require('node-fetch');

const fetchIndustryTrends = async (industry) => {
  const trends = {
    construction: { cpc: 2.5, ctc: 1.8 },
    retail: { cpc: 1.2, ctc: 0.9 },
    healthcare: { cpc: 3.0, ctc: 2.2 },
  };

  if(trends[industry]) 
    return trends[industry];
  
  return { cpc: 1.5, ctc: 1.0 };
};

module.exports = fetchIndustryTrends;