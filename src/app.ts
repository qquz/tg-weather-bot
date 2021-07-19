import jobs from './bot/background/jobs';
import start from './bot/background';
import { bot } from './bot';

start(jobs);
bot.launch();
