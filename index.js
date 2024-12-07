import TelegramBot from 'node-telegram-bot-api';
import 'dotenv/config';

const BOT_TOKEN = process.env.BOT_TOKEN;
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

console.log('Бот запущен и готов к работе');

bot.on('chat_join_request', async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  try {
    await bot.approveChatJoinRequest(chatId, userId);
    console.log(
      `Заявка пользователя ${msg.from.username || msg.from.id} одобрена.`
    );
  } catch (error) {
    console.error(`Ошибка при подтверждении заявки:`, error);
  }
});
