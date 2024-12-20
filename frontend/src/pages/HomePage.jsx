import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='Home'>
      <h1 className='heading'>Welcome to Telegram Bot</h1>
      <nav className='navigationBar'>
        <Link className='Link' to="/keywords"><p className='LinkPara'>Keyword Analysis</p></Link>
        <Link className='Link' to="/trends"><p className='LinkPara'>Trend Prediction</p></Link>
        <Link className='Link' to="/faq"><p className='LinkPara'>FAQ</p></Link>
      </nav>
    </div>
  );
};

export default HomePage;