import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {
  @Input() arrayProjects:any[] = [];
  @Input() nameParameter:any;

  constructor() { }

  ngOnInit(): void {
    console.log('hijo card', this.nameParameter);
  }

}
