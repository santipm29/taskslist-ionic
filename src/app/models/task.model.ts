export class Task {
    descripcion: string;
    finished: boolean;
    constructor(descripcion: string) {
        this.descripcion = descripcion;
        this.finished = false;
    }
}