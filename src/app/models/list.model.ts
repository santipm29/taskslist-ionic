import { Task } from './task.model';

export class List {
    id: number;
    title: string;
    createdIn: Date;
    finishedIn: Date;
    finished: boolean;
    tasks: Task[];

    constructor( title: string ) {
        this.title = title;
        this.createdIn = new Date();
        this.finished = false;
        this.tasks = [];
        this.id = new Date().getTime();
    }
}