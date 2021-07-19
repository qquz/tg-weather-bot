import { setUserNotificationTimeById } from '../utils/user';

const setNotificationTime = ctx => {
  const { from: { id }, data } = ctx.update.callback_query;
  const { payload: time } = JSON.parse(data);

  setUserNotificationTimeById(id, time);

  ctx.reply(`Notification set for ${time}.`);
};

export default setNotificationTime;
