import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  taskList: List;
  nameTask: string;
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) { 
    const id = this.route.snapshot.paramMap.get('id');
    this.taskList = this.taskService.getTaskList(id);
  }

  ngOnInit() {
  }

  addTask(): void {
    if (this.nameTask.length === 0) { return; }
    const newTask = new Task(this.nameTask);
    this.taskList.tasks.push(newTask);
    this.nameTask = '';
    this.taskService.saveStorage();
  }

}
