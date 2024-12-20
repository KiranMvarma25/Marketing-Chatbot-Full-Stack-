const API_BASE_URL = 'http://localhost:5001/api';

export const fetchKeywords = async (data) => {
  const response = await fetch(`${API_BASE_URL}/keywords/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if(!response.ok) 
    throw new Error('Error fetching keywords');
  
  return response.json();
};



export const fetchTrends = async (industry) => {
  try{
    const response = await fetch(`${API_BASE_URL}/trends/fetch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ industry }),
    });

    if(!response.ok) 
      throw new Error('Failed to fetch trends');
    

    const data = await response.json();
    return data.trend; 
  } 
  catch(error){
    throw new Error(error.message);
  }
};


export const fetchFAQ = async (question) => {
  const response = await fetch(`${API_BASE_URL}/faq/ask`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question }),
  });

  if(!response.ok) 
    throw new Error('Error fetching FAQ');
  

  return response.json();
};