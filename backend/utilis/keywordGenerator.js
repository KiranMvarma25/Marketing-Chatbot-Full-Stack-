const generateKeywords = async (industry, objective, audience, location) => {
  let keywords = [];

  if(industry === 'Construction')
    keywords.push('construction services', 'construction contractors', 'building materials');

  else if(industry === 'Retail') 
    keywords.push('online shopping', 'retail sales', 'e-commerce deals'); 

  else if(industry === 'Healthcare') 
    keywords.push('healthcare services', 'medical supplies', 'health insurance');

  if(objective === 'lead generation') 
    keywords.push('lead generation strategies');

  if(audience === 'young adults') 
    keywords.push('youth trends');

  if(location) 
    keywords.push(`${industry} services in ${location}`);

  return keywords;
};

module.exports = { generateKeywords };