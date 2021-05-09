import getWeather from './providers/owm.mjs';

const weather = async city => {
  try {
    return await getWeather(city);
  } catch (e) {
    throw new Error(e);
  }
};

export default weather;
