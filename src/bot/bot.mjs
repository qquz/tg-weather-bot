import env from 'dotenv';
import Telegraf from 'telegraf';

import promptNotificationTime from './commands/promptNotificationTime.mjs';
import setCity from './commands/setCity.mjs';
import showWeather from './commands/showWeather.mjs';

import callbackHandler from './utils/callbackHandler.mjs';

env.config();

const bot = new Telegraf(process.env.WBOT_TOKEN_BOT);

bot.command('weather', ctx => showWeather(ctx));
bot.command('morning', ctx => promptNotificationTime(ctx));
bot.command('evening', ctx => promptNotificationTime(ctx));
bot.on('callback_query', ctx => callbackHandler(ctx));
bot.on('location', ctx => setCity(ctx));

export default bot;
