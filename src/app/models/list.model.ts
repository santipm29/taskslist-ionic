import { Task } from './task.model';

export class List {
    id: number;
    title: string;
    createdIn: Date;
    finishedIn: boolean;
    tasks: Task[];

    constructor( title: string ) {
        this.title = title;
        this.createdIn = new Date();
        this.finishedIn = false;
        this.tasks = [];
        this.id = new Date().getTime();
    }
}