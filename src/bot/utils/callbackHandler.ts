import setNotificationTime from '../actions/setNotificationTime';

const callbackHandler = ctx => {
  const { data } = ctx.update.callback_query;
  // todo repair keyboard
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
