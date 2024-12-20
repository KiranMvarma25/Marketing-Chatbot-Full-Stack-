require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome! Please provide your industry.');
});

bot.onText(/What industry is your business in\?/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Please enter the industry (e.g., Construction, Retail, etc.).');
});

bot.onText(/^(.*)$/, (msg, match) => {
  const chatId = msg.chat.id;
  const userInput = match[1];

  bot.sendMessage(chatId, `You entered: ${userInput}. Thank you!`);
});
