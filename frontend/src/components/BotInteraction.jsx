import { useState } from 'react';

const BotInteraction = () => {
  const [industry, setIndustry] = useState('');
  const [objective, setObjective] = useState('');
  const [audience, setAudience] = useState('');
  const [location, setLocation] = useState('');
  const [keywords, setKeywords] = useState([]);

  const handleSubmit = async () => {
    const data = { industry, objective, audience, location };
    const response = await fetch(`${API_BASE_URL}/keywords/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if(response.ok){
      const result = await response.json();
      setKeywords(result.keywords);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Industry" value={industry} onChange={e => setIndustry(e.target.value)}/>

      <input type="text" placeholder="Objective" value={objective} onChange={e => setObjective(e.target.value)}/>

      <input type="text" placeholder="Audience" value={audience} onChange={e => setAudience(e.target.value)}/>

      <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)}/>

      <button onClick={handleSubmit}>Generate Keywords</button>
      <div>
        <h3>Generated Keywords:</h3>
        <ul>
          {keywords.map((keyword, index) => (
            <li key={index}>{keyword}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BotInteraction;