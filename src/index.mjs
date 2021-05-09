import jobs from './bot/background/jobs.mjs';
import start from './bot/background/index.mjs';
import bot from './bot/bot.mjs';

start(jobs);
bot.launch();
