import _ from 'lodash';
import moment from 'moment';

const propValuePreparator = (value, type) => {
  const types = {
    temperature: {
      emoji: '🌡',
      postfix: '°C'
    },
    humidity: {
      emoji: '💧',
      postfix: '%'
    },
    cloudiness: {
      emoji: '☁️',
      postfix: '%'
    }
  };

  return`*${types[type].emoji} ${value} ${types[type].postfix}*`;
};

const weatherCodes = {
  200: '⛈',
  201: '⛈',
  202: '⛈',
  210: '⛈',
  211: '⛈',
  212: '⛈',
  221: '⛈',
  230: '⛈',
  231: '⛈',
  232: '⛈',
  300: '💦',
  301: '💦',
  302: '💦',
  310: '💦',
  311: '💦',
  312: '💦',
  313: '💦',
  314: '💦',
  321: '💦',
  500: '🌧',
  501: '🌧',
  502: '🌧',
  503: '🌧',
  504: '🌧',
  511: '🌧',
  520: '🌧',
  521: '🌧',
  522: '🌧',
  531: '🌧',
  600: '❄️',
  601: '❄️',
  602: '❄️',
  611: '❄️',
  612: '❄️',
  613: '❄️',
  615: '❄️',
  616: '❄️',
  620: '❄️',
  621: '❄️',
  622: '❄️',
  701: '🌫',
  711: '🌫',
  721: '🌫',
  731: '🌫',
  741: '🌫',
  751: '🌫',
  761: '🌫',
  762: '🌫',
  771: '🌫',
  781: '🌪',
  800: '☀️',
  801: '🌤',
  802: '☁️️',
  803: '⛅️️️',
  804: '🌥️️️'
};

export default (weather, city) => {
  const slicedData = _.slice(weather, 1, 6);

  const keys = [];
  slicedData.forEach(forecast => keys.push(forecast.dt_txt));

  let result = '';
  result += `*${city}*\n\n`;

  for ( let i = 0; i < keys.length; i++) {
    result += `*${moment(keys[i]).format('HH:mm')}*`;
    result = result.concat(` | ${propValuePreparator((slicedData[i].main.temp).toFixed(0), 'temperature')} | `);
    result = result.concat(`${propValuePreparator(slicedData[i].main.humidity, 'humidity')} | `);
    result = result.concat(`${propValuePreparator(slicedData[i].clouds.all, 'cloudiness')} | `);
    result = result.concat(weatherCodes[slicedData[i].weather[0].id]);
    // result += '------------------------------------------------------------';
    result += `\n`;
  }

  result += `\n`;

  return result;
};
