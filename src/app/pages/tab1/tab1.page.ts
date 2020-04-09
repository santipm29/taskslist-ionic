import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from "../../services/task.service";
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private router: Router,
    public taskService: TaskService,
    private alert: AlertController
  ) {}

  async addTask() {
    const alert = await this.alert.create({
      header: 'New task list',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Title task list'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Ok',
          handler: (data) => {
            if (data.title === '') { return; }
            const id = this.taskService.createList(data.title);
            this.router.navigateByUrl(`/tabs/tab1/add/${id}`);
          }
        }
      ]
    })
    await alert.present();
    
  }


}