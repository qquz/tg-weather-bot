import weatherMailing from '../actions/weatherMailing.mjs';

export default {
  mailing: {
    active: true,
    schedule: '0 * * * *',
    worker: weatherMailing
  }
};
