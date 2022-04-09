import getWeather from './providers/owm';

const weather = async (city: string): Promise<string> => {
  try {
    return await getWeather(city);
  } catch (e) {
    throw new Error(e);
  }
};

export default weather;
