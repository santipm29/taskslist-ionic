import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {
  @Input() completed = true;
  constructor(
    private router: Router,
    public taskService: TaskService
    ) { }

  ngOnInit() {}

  selectList( list: List ) {
    if ( this.completed ) {
      this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`);
    }
  }
  deleteList( list: List ) {
    this.taskService.deleteTaskList( list );
  }

}
