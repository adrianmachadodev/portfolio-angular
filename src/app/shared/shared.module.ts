import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { SectionComponent } from './components/section/section.component';



@NgModule({
  declarations: [
    CardProjectComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CardProjectComponent,
    SectionComponent

  ]
})
export class SharedModule { }
