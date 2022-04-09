import weatherMailing from '../actions/weatherMailing';

export default [
  {
    active: true,
    schedule: '0 * * * *',
    worker: weatherMailing
  }
];
