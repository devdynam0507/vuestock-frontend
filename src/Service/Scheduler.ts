
export interface CronConfig {
    intervalSeconds: number;
    jobFunction: () => void;
}

export class Scheduler {

    private readonly cronConfig: CronConfig;
    private cronTimer: NodeJS.Timer | null;
    private lastRunTimeMills: number;

    constructor(cronConfig: CronConfig) {
        this.cronConfig = cronConfig;
        this.cronTimer = null;
        this.lastRunTimeMills = -1;
    }

    async startSchedule() {
        if (this.cronTimer != null) {
            clearInterval(this.cronTimer);
        }
        const now: Date = new Date();
        now.setSeconds(55);
        this.cronConfig.jobFunction();
        this.lastRunTimeMills = now.getTime();

        this.cronTimer = setInterval(() => {
            const now_: Date = new Date();
            const diffMilli = this.cronConfig.intervalSeconds * 1000;
            const diff = now_.getTime() - this.lastRunTimeMills;
            if (diff >= diffMilli) {
                try {
                    this.cronConfig.jobFunction();
                } catch(e) {
                    console.error(e);
                }
                this.lastRunTimeMills = now_.getTime();
            }
        }, 1000);
    }
}