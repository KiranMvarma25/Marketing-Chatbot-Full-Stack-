const TELEGRAM_API_URL = 'https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage'; // Replace with your bot token

export const sendTelegramMessage = async (chatId, message) => {
  const response = await fetch(TELEGRAM_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  });

  if(!response.ok) 
    throw new Error('Error sending message to Telegram');
  
  return response.json();
};