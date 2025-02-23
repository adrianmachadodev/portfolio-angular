import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css'],
})
export class TechComponent implements OnInit {
  tech: Array<LinkModel> = [
    {
      icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg`,
      name: 'HTML5',
      color: 'black',
      width: 100,
      percent: 100,
    },
    {
      icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg`,
      name: 'CSS3',
      color: 'black',
      width: 100,
      percent: 100,
    },
    {
      icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg`,
      name: 'JavaScript',
      color: 'black',
      width: 70,
      percent: 70,
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg',
      name: 'TypeScript',
      color: 'black',
      width: 60,
      percent: 60,
    },
    {
      icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-plain.svg`,
      name: 'Angular',
      color: 'black',
      width: 60,
      percent: 60,
    },
    {
      icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain.svg`,
      name: 'Bootstrap',
      color: 'black',
      width: 90,
      percent: 90,
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
      name: 'SASS',
      color: 'black',
      width: 70,
      percent: 70,
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grunt/grunt-plain.svg',
      name: 'Grunt',
      color: 'black',
      width: 40,
      percent: 40,
    },
  ];

  titleTechs:string = 'TECH STACK'
  titleProjects:string = 'PROYECTOS PERSONALES'

  constructor(private route:Router) {}

  ngOnInit(): void {}


  navigatePageProject(){
    this.route.navigate(["/tech/projects"])
  }
}

class LinkModel {
  icon: string;
  name: string;
  color: string;
  width: number;
  percent: number;
}
