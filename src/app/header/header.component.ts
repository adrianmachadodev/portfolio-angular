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
      name: 'Descargar CV',
      link: '../../../assets/adrianmachado_resume.pdf',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Experiencia',
        // icon: 'uil uil-info-circle',
        icon: 'uil uil-bag',
        router: ['/', 'experience'],
      },
      {
        name: 'Tecnologias',
        icon: 'uil uil-wrench',
        // icon: 'uil uil-book-open',
        router: ['/', 'tech'],
      },
      // {
      //   name: 'Portfolio',
      //   icon: 'uil uil-clipboard-notes',
      //   router: ['/', 'works'],
      // },
    ];
  }
}

class btnModel {
  name: string;
  link: string;
}
