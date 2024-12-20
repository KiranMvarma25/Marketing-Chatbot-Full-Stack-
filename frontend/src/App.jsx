import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import FAQPage from './pages/FAQPage';
import KeywordPage from './pages/KeywordPage';
import TrendPage from './pages/TrendPage';

function App(){
  return (
    <Router>
      <div>
        <Routes> 
          <Route path="/" element={<HomePage />} /> 
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/keywords" element={<KeywordPage />} />
          <Route path="/trends" element={<TrendPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;