import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists/lists.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ListsComponent],
  exports: [ListsComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
