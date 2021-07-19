import moment from 'moment';
import _ from 'lodash';
import extra from 'telegraf/extra.js';

import { bot } from '../index';
import { getAllUsers } from '../utils/user';
import getWeather from '../../weather';

const markup = extra.markdown();

const weatherMailing = async (): Promise<void> => {
  try {
    const users = getAllUsers();

    const startOfCurrentHour = moment().utcOffset('+03:00').startOf('hour').format('HH:mm');

    const part1 = _.filter(users,{ morning: startOfCurrentHour }).concat();
    const part2 = _.filter(users, { evening: startOfCurrentHour }).concat();

    const filteredUsers = part1.concat(part2);

    for (const user of filteredUsers) {
      if (!_.isEmpty(user.city)) {
        await bot.telegram.sendMessage(user.id, await getWeather(user.city), markup);
      } else {
        await bot.telegram.sendMessage(user.id, 'need your location...');
      }
    }
  } catch (e) {
    throw new Error(e);
  }
};

export default weatherMailing;
