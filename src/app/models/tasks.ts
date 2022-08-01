export class Task {
    taskID: number | any;
    taskName: string | any;
    taskPriority: string | any;
    taskStatus: string | any;

    constructor() {
        this.taskID = 1;
        this.taskName = "code in angular";
        this.taskPriority = "high";
        this.taskStatus = "active";
    }
}
