import 'graphql-import-node';
import server from './server';

const TelegramBot = require('node-telegram-bot-api');

require('dotenv').config();

// replace the value below with the Telegram token you receive from @BotFather
const token = '7750457950:AAGzuh0A0VxF6_e4_71wEISESGUm52AyOzY';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg: { chat: { id: string } }, match: string[]) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg: { chat: { id: string } }) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});

const PORT = 8888;

server.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
