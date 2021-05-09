const keyboardGenerator = part => {
  const board = {
    inline_keyboard: [[], []]
  };

  part.slice(0, 3).map(item => board.inline_keyboard[0].push({
    text: item,
    callback_data: JSON.stringify({
      type: 'SET_NOTIFICATION_TIME',
      payload: item
    })
  }));
  part.slice(3, 6).map(item => board.inline_keyboard[1].push({
    text: item,
    callback_data: JSON.stringify({
      type: 'SET_NOTIFICATION_TIME',
      payload: item
    })
  }));

  return board;
};

const TimeKeyboard = ctx => {
  // terrible crutch
  const dayTime = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00'];
  const nightTime = ['18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];

  const part = ctx.update.message.text === '/morning' ? dayTime : nightTime;

  return keyboardGenerator(part);
};

export default TimeKeyboard;
