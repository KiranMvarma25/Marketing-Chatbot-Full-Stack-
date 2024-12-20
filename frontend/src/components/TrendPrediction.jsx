import { useState } from 'react';
import { fetchTrends } from '../services/apiService';

const TrendPrediction = () => {
  const [industry, setIndustry] = useState('');
  const [trends, setTrends] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try{
      const result = await fetchTrends(industry);
      setTrends(result);
    } 
    catch(error){
      setError(error.message);
    }
  };

  return (
    <div className='keywordAnalysis'>
      <h2 className='heading'>Trend Prediction</h2>
      <form className='keywordAnalysisForm' onSubmit={handleSubmit}>
        <input className='inputField' type="text" placeholder="Industry" value={industry} onChange={e => setIndustry(e.target.value)}/>

        <br />

        <button className='button' type="submit">Fetch Trends</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {trends && (
        <div className='generatedKeywords'>
          <h3>Trends for {industry} :</h3>
          <p>CPC: {trends.cpc}</p>
          <p>CTC: {trends.ctc}</p>
        </div>
      )}
    </div>
  );
};

export default TrendPrediction;