import { useState } from 'react';

function FAQPage() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleQuestionChange = (e) => setQuestion(e.target.value);

  const fetchAnswer = async () => {
    if (!question) return;
    const response = await fetch('http://localhost:5001/api/faqs/answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    const data = await response.json();
    setAnswer(data.answer || 'Sorry, I do not have an answer for that.');
  };

  return (
    <div className='keywordAnalysis'>
      <h1 className='heading'>FAQ Page</h1>
      <div className='keywordAnalysisForm'>  
        <input className='inputField' type="text" value={question} onChange={handleQuestionChange} placeholder="Ask your question"/>

        <br />

        <button className='button' onClick={fetchAnswer}>Get Answer</button>
      </div>
      <div className='generatedKeywords'>
        {answer && <p><strong>Answer :</strong> {answer}</p>}
      </div>
    </div>
  );
}

export default FAQPage;