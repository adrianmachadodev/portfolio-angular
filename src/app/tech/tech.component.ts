import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css'],
})
export class TechComponent implements OnInit {
  tech: Array<LinkModel> = [
    {
      icon: 'devicon-html5-plain',
      name: 'HTML5',
      color: 'black',
      width: 100,
      percent: 100,
    },
    {
      icon: 'devicon-css3-plain',
      name: 'CSS3',
      color: 'black',
      width: 100,
      percent: 100,
    },
    {
      icon: 'devicon-javascript-plain',
      name: 'JavaScript',
      color: 'black',
      width: 70,
      percent: 70,
    },
    {
      icon: 'devicon-angularjs-plain',
      name: 'Angular',
      color: 'black',
      width: 60,
      percent: 60,
    },
    {
      icon: 'devicon-bootstrap-plain',
      name: 'Bootstrap',
      color: 'black',
      width: 90,
      percent: 90,
    },
    {
      icon: 'devicon-sass-original',
      name: 'SASS',
      color: 'black',
      width: 70,
      percent: 70,
    },
    {
      icon: 'devicon-python-plain',
      name: 'Python',
      color: 'black',
      width: 50,
      percent: 50,
    },
    {
      icon: 'devicon-typescript-plain',
      name: 'TypeScript',
      color: 'black',
      width: 60,
      percent: 60,
    },
    {
      icon: 'devicon-mongodb-plain',
      name: 'MongoDB',
      color: 'black',
      width: 50,
      percent: 50,
    },
    {
      icon: 'devicon-nodejs-plain',
      name: 'Node.js',
      color: 'black',
      width: 45,
      percent: 45,
    },
    {
      icon: 'devicon-express-original',
      name: 'Express',
      color: 'black',
      width: 40,
      percent: 40,
    },
    {
      icon: 'devicon-grunt-plain',
      name: 'Grunt',
      color: 'black',
      width: 40,
      percent: 40,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

class LinkModel {
  icon: string;
  name: string;
  color: string;
  width: number;
  percent: number;
}
