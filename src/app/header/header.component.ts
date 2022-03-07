import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  mainMenu: {
    defaultOptions: Array<any>;
  } = { defaultOptions: [] };

  linkCv: Array<btnModel> = [
    {
      name: 'Curriculum Vitae',
      link: '../../../assets/curriculum.pdf',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Portfolio',
        icon: 'uil uil-clipboard-notes',
        router: ['/', 'works'],
      },
      {
        name: 'Tecnologias',
        icon: 'uil uil-brain',
        router: ['/', 'tech'],
      },
    ];
  }
}

class btnModel {
  name: string;
  link: string;
}
