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
      link: 'https://www.linkedin.com/in/adriangmachado/',
      icon: '<i class="uil uil-linkedin"></i>',
    },
    {
      link: 'https://github.com/adrianmachadodev',
      icon: '<i class="uil uil-github"></i>',
    },
    {
      link: 'mailto:machadoadriangabriel@gmail.com',
      icon: '<i class="uil uil-envelope"></i>',
    },
  ];

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
      typeColor: 'black',
    });

    writer
      .changeCursorColor('black')
      .type('Soy desarrollador Front-End.')
      .rest(7000)
      .remove(29)
      .type('Estudiante de programación.')
      .rest(7000)
      .remove(27)
      .type('Diseñador Web.')
      .rest(7000)
      .remove(13)
      .start();
  };
}

class LinkModel {
  link: string;
  icon: string;
}
