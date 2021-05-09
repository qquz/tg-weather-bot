import axios from 'axios';
import env from 'dotenv';
import _ from 'lodash';

env.config();

const TOKEN_DADATA = process.env.WBOT_TOKEN_DADATA;

const _getURL = ctx => {
  const { location } = ctx.update.message;
  return `https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address?radius_meters=1000&lat=${location.latitude}&lon=${location.longitude}`;
};

const _queryData = async ctx => {
  try {
    const result = await axios.get(_getURL(ctx), { headers: { Authorization: `Token ${TOKEN_DADATA}` } });

    return result.data;
  } catch (e) {
    throw new Error(e);
  }
};

const getCityByLocation = async ctx => {
  try {
    const { suggestions } = await _queryData(ctx);

    if (!_.isEmpty(suggestions)) {
      const { city, country } = suggestions[0].data;

      if (country && city) {
        return `${city}, ${country}`;
      }

      return null;
    }
    return null;
  } catch (e) {
    throw new Error(e);
  }
};

export { getCityByLocation };
