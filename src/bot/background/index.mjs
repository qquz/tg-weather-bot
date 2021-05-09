import cron from 'cron';

const { CronJob } = cron;

const start = list => {
  Object.keys(list).map(job => {
    const { active, schedule, worker } = list[job];

    if (active) {
      const process = new CronJob(schedule, worker);
      process.start();
    }
  });
};

export default start;
