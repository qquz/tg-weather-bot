import setNotificationTime from '../actions/setNotificationTime.mjs';

const callbackHandler = ctx => {
  const { data } = ctx.update.callback_query;
  const { type } = JSON.parse(data);

  switch (type) {
    case 'SET_NOTIFICATION_TIME':
      setNotificationTime(ctx);
      break;
    default:
      break;
  }
};

export default callbackHandler;
