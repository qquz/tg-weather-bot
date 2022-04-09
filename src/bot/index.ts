import { config } from 'dotenv';
import Telegraf from 'telegraf';

import promptNotificationTime from './commands/promptNotificationTime';
import setCity from './commands/setCity';
import showWeather from './commands/showWeather';

import callbackHandler from './utils/callbackHandler';

config();

const bot = new Telegraf(process.env.WBOT_TOKEN_BOT);

bot.command('weather', ctx => showWeather(ctx));
bot.command('morning', ctx => promptNotificationTime(ctx));
bot.command('evening', ctx => promptNotificationTime(ctx));
bot.on('callback_query', ctx => callbackHandler(ctx));
bot.on('location', ctx => setCity(ctx));

export { bot };
