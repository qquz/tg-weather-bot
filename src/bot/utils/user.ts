import { config } from 'dotenv';
import lowdb from 'lowdb';
import moment from 'moment';
import FileSync from 'lowdb/adapters/FileSync.js';

config();

const storagePath = process.env.WBOT_STORAGE_PATH;
const path = storagePath ? `${storagePath}/users.json` : './src/users.json';
const adapter = new FileSync(path);
const users = lowdb(adapter);

const getAllUsers = users.getState();

const getUserCityById = (id: string) => users.get(`${id}.city`).value();

const setUserCityById = (userId: string, city: string) =>
  users.set(`${userId}.city`, city).set(`${userId}.id`, userId).write();

const setUserNotificationTimeById = (userId: string, time: string) => {
  const isEvening = moment(time, 'HH:mm').format() > moment('12:00', 'HH:mm').format();
  const dayPart = isEvening ? 'evening' : 'morning';

  users.set(`${userId}.${dayPart}`, time).set(`${userId}.id`, userId).write();
};

export {
  getAllUsers,
  getUserCityById,
  setUserCityById,
  setUserNotificationTimeById
};
