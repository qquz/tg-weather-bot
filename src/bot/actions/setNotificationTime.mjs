import User from '../config/User.mjs';

const setNotificationTime = ctx => {
  const { from: { id }, data } = ctx.update.callback_query;
  const { payload } = JSON.parse(data);

  const user = new User();
  user.setNotificationTime(id, payload);

  ctx.reply(`Notification set for ${payload}.`);
};

export default setNotificationTime;
