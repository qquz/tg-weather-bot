import { setUserCityById } from '../utils/user';
import { getCityByLocation } from '../utils/dadata';

const setCity = async ctx => {
  try {
    const { from: { id } } = ctx.update.message;

    const location = await getCityByLocation(ctx);

    if (location) {
      setUserCityById(id, location);

      ctx.reply(`Thanks, location updated to ${location}. Now you can choose notification time or request forecast.`);
    } else {
      ctx.reply(`Sorry, can't recognize your location. Please, give us another try.`);
    }
  } catch (e) {
    throw new Error(e);
  }
};

export default setCity;
