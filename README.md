Telegram Chatbot for Trend Analysis, FAQ, and Keyword Insights

This Telegram chatbot is designed to provide businesses and users with industry-specific insights, including trend predictions, keyword analysis, and answers to frequently asked questions (FAQs). Built using Node.js, Express, and MongoDB for the backend, it integrates seamlessly with the Telegram API to deliver real-time, interactive user experiences.


Key Features -

1. Trend Analysis
Allows users to input their industry (e.g., Retail, Construction).
Fetches and saves industry trends, such as Cost Per Click (CPC) and Cost to Customer (CTC), in a MongoDB database.
Provides users with actionable data to guide decision-making.

2. Keyword Analysis
Collects user input to identify critical keywords related to their business.
Analyzes keywords for performance metrics and relevance.
Helps users optimize their marketing and SEO strategies.

3. FAQ Handling
Provides automated answers to frequently asked questions.
Helps users quickly address common queries about industries, tools, or services.
Enhances user engagement and reduces manual intervention.

4. Interactive Telegram Integration
Handles user queries through a conversational interface on Telegram.
Responds dynamically to commands like /start, /faq, and industry-specific questions.
Ensures a user-friendly experience with real-time responses.


Technologies Used -

Backend :

Node.js
Express.js
MongoDB
Mongoose

Frontend :

React.js
CSS

Telegram API

node-telegram-bot-api: For seamless interaction with Telegram users.



Installation -

Prerequisites :

Node.js installed (v16 or higher)
MongoDB installed and running locally or in the cloud

Steps :

git clone https://github.com/KiranMvarma25/Marketing-Chatbot-Full-Stack-.git

3.1.1. cd frontend 
1.2. npm i 
1.3. npm run dev 

3.2.1. cd backend 
2.2. npm i 
2.3. npm start