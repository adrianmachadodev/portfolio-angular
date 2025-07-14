import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  @Input() frameworks: any[] = [];
  @Input() typeFramework: 'angular' | 'astro' = 'angular';
  @Input() nameParam:string;

  constructor() {}

  ngOnInit(): void {}
}
