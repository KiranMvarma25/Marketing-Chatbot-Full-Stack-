const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const keywordRoutes = require('./routes/keywordRoutes');
const trendRoutes = require('./routes/trendRoutes');
const faqRoutes = require('./routes/faqRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/keywords', keywordRoutes);
app.use('/api/trends', trendRoutes);
app.use('/api/faqs', faqRoutes);

// require('./services/telegramBotService')

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));