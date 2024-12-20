import { useState } from 'react';
import { fetchKeywords } from '../services/apiService';

const KeywordAnalysis = () => {
  const [industry, setIndustry] = useState('');
  const [objective, setObjective] = useState('');
  const [audience, setAudience] = useState('');
  const [location, setLocation] = useState('');
  const [keywords, setKeywords] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { industry, objective, audience, location };
    try{
      const result = await fetchKeywords(data);
      setKeywords(result.keywords);
    } 
    catch(error){
      alert(error.message);
    }
  };

  return (
    <div className='keywordAnalysis'>
      <h2 className='heading'>Keyword Analysis</h2>
      <form className='keywordAnalysisForm' onSubmit={handleSubmit}>
        <input className='inputField' type="text" placeholder="Industry" value={industry} onChange={e => setIndustry(e.target.value)}/>
        
        <br />

        <input className='inputField' type="text" placeholder="Objective" value={objective} onChange={e => setObjective(e.target.value)}/>

        <br />

        <input className='inputField' type="text" placeholder="Audience" value={audience} onChange={e => setAudience(e.target.value)}/>

        <br />

        <input className='inputField' type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)}/>

        <br />

        <button className='button' type="submit">Generate Keywords</button>
      </form>

      {keywords.length > 0 && (
        <div className='generatedKeywords'>
          <h3>Generated Keywords :</h3>
          <ul>
            {keywords.map((keyword, index) => (
              <p className='para' key={index}>{keyword.toUpperCase()}</p>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default KeywordAnalysis;