import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardProjectComponent } from './components/card-project/card-project.component';



@NgModule({
  declarations: [
    CardProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CardProjectComponent
  ]
})
export class SharedModule { }
