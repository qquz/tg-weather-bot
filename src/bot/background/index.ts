import cron from 'cron';

const { CronJob } = cron;

interface ListItem {
  active: boolean;
  schedule: string;
  worker(): void;
}

const start = (list: ListItem[]): void => {
  Object.keys(list).map(job => {
    const { active, schedule, worker } = list[job];

    if (active) {
      const process = new CronJob(schedule, worker);
      process.start();
    }
  });
};

export default start;
