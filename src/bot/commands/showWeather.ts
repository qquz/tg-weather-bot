import { getUserCityById } from '../utils/user';
import weather from '../../weather';

const showWeather = async ctx => {
  try {
    const { from: { id } } = ctx.update.message;

    const city = getUserCityById(id);

    if (!city) return ctx.reply('Please, first set your location.');

    const formattedForecast = await weather(city);

    if (!formattedForecast) return ctx.reply('Sorry, we cant find weather for your location. Try to set another one.');

    return ctx.replyWithMarkdown(formattedForecast);
  } catch (e) {
    throw new Error(e);
  }
};

export default showWeather;
