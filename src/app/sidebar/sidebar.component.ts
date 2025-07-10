import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
//@ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('asTitle') asTitle: ElementRef;
  links: Array<LinkModel> = [
    {
      link: 'https://www.linkedin.com/in/machadoadrian/',
      message: '¡Conectemos en LinkedIn! 🤝',
      icon: 'uil uil-linkedin',
    },
    {
      link: 'https://github.com/adrianmachadodev',
      message:'¡Mis proyectos en GitHub! 🚀',
      icon: "uil uil-github",
    },
    {
      link: 'mailto:machadoadriangabriel@gmail.com',
      message: '¡No dudes en enviarme un correo! 🔔',
      icon: 'uil uil-envelope',
    },
  ];

  pills:Array<TechPill> = [
    {
      name: "#HTML"
    },
    {
      name: "#CSS"
    },
    {
      name: "#JavaScript"
    },
    {
      name: "#TypeScript"
    },
    {
      name: "#Angular"
    },
    {
      name: "#Astro"
    },
    {
      name: "#Tailwind"
    },
    
  ]

  constructor() {
    this.asTitle;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initEffect();
  }

  initEffect = () => {
    const target = this.asTitle.nativeElement;
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white',
    });

    writer
      .changeCursorColor('gray')
      .type(this.capitalizeText('desarrollador Front-End.'))
      .rest(7000)
      .remove(29)
      .type(this.capitalizeText('Estudiante de programación.'))
      .rest(7000)
      .remove(27)
      .type(this.capitalizeText('Diseñador Web.'))
      .rest(7000)
      .remove(13)
      .start();
  };

  capitalizeText(profession:string){
    return profession.toLocaleUpperCase();
  }
}



class LinkModel {
  link: string;
  message:string;
  icon: string;
}

class TechPill{
  name:string;
}