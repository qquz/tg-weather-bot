import TimeKeyboard from '../keyboards/TimeKeyboard.mjs';

const promptNotificationTime = ctx => {
  ctx.reply('Choose time for notification:', {
    reply_markup: TimeKeyboard(ctx),
    reply_to_message_id: ctx.update.message_id
  });
};

export default promptNotificationTime;
