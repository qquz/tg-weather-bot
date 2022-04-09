import morning from './time/morning.json';
import evening from './time/evening.json';

const TimeKeyboard = ctx => {
  const board = ctx.update.message.text === '/morning' ? morning : evening;

  return { inline_keyboard: board };
};

export default TimeKeyboard;
