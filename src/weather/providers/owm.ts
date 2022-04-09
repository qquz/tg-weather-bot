import axios from 'axios';
import { config } from 'dotenv';
import _ from 'lodash';

import { owm } from '../mappers';

config();

const openWeatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=';
const units = 'metric';
const lang = 'ru';

const getURL = city => `${openWeatherUrl}${encodeURI(city)}&APPID=${process.env.WBOT_TOKEN_OPEN_WEATHER_MAP}&units=${units}&lang=${lang}`;

const _getData = async city => {
  try {
    const url = getURL(city);
    const response = await axios.get(url);

    return response.data.list;
  } catch (e) {
    throw new Error(e);
  }
};

const getWeather = async city => {
  try {
    const weather = await _getData(city);

    if (!_.isEmpty(weather)) {
      return owm(weather, city);
    }

    return null;
  } catch (e) {
    throw new Error(e);
  }
};

export default getWeather;
