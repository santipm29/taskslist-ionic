import { Injectable } from "@angular/core";
import { List } from "../models/list.model";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  taskList: List[] = [];
  constructor() {
    this.loadStorage();
  }

  createList(title: string) {
    const list = new List(title);
    this.taskList.push(list);
    this.saveStorage();
    return list.id;
  }

  getTaskList(id: string | number) {
    id = +id;
    return this.taskList.find(list => list.id === id);
  }

  saveStorage() {
    localStorage.setItem("data", JSON.stringify(this.taskList));
  }

  loadStorage() {
    if (localStorage.getItem("data")) {
      this.taskList = JSON.parse(localStorage.getItem("data"));
    }
  }
}
