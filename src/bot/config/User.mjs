import env from 'dotenv';
import lowdb from 'lowdb';
import moment from 'moment';
import FileSync from 'lowdb/adapters/FileSync.js';

env.config();

const storagePath = process.env.WBOT_STORAGE_PATH;

class User {
  constructor() {
    const path = storagePath ? `${storagePath}/users.json` : './src/users.json';
    this.users = lowdb(new FileSync(path));
  }

  getAll() {
    return this.users.getState();
  }

  getUserCity(id) {
    return this.users.get(`${id}.city`).value();
  }

  setUserCity(id, city) {
    this.users.set(`${id}.city`, city).set(`${id}.id`, id).write();
  }

  setNotificationTime(id, time) {
    const isEvening = moment(time, 'HH:mm').format() > moment('12:00', 'HH:mm').format();
    const dayPart = isEvening ? 'evening' : 'morning';

    this.users.set(`${id}.${dayPart}`, time).set(`${id}.id`, id).write();
  }
}

export default User;
