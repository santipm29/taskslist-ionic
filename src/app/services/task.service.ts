import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  taskList: any[] = [];
  constructor() { }
}
