import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { TaskService } from "../../services/task.service";
import { Router } from "@angular/router";
import { List } from "src/app/models/list.model";
import { AlertController, IonList } from "@ionic/angular";

@Component({
  selector: "app-lists",
  templateUrl: "./lists.component.html",
  styleUrls: ["./lists.component.scss"]
})
export class ListsComponent implements OnInit {
  @Input() completed = true;
  @ViewChild("list", null) ionList: IonList;
  constructor(
    private router: Router,
    public taskService: TaskService,
    private alert: AlertController
  ) {}

  ngOnInit() {}

  selectList(list: List) {
    if (this.completed) {
      this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`);
    }
  }

  deleteList(list: List) {
    this.taskService.deleteTaskList(list);
  }

  async editList(list: List) {
    const alert = await this.alert.create({
      header: "Edit task list",
      inputs: [
        {
          name: "title",
          type: "text",
          value: list.title,
          placeholder: "Title task list"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary"
        },
        {
          text: "Update",
          handler: data => {
            if (data.title === "") {
              return;
            }
            list.title = data.title;
            this.taskService.saveStorage();
          }
        }
      ]
    });
    this.ionList.closeSlidingItems();
    await alert.present();
  }
}
