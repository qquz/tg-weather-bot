import User from '../config/User.mjs';
import weather from '../../weather/index.mjs';

const showWeather = async ctx => {
  try {
    const { from: { id } } = ctx.update.message;

    const user = new User();
    const city = user.getUserCity(id);

    if (!city) return ctx.reply('Please, first set your location.');

    const formattedForecast = await weather(city);

    if (!formattedForecast) return ctx.reply('Sorry, we cant find weather for your location. Try to set another one.');

    return ctx.replyWithMarkdown(formattedForecast);
  } catch (e) {
    throw new Error(e);
  }
};

export default showWeather;
