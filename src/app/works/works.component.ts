import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
})
export class WorksComponent implements OnInit {
  config: any;
  nameParam:any;

  arrayProjects: LinkModel[] = [
    {
      thumbnail: `../../assets/images/yanina.jpg`,
      title: 'Sitio Web',
      descrip:
        'Mi comienzo en el desarrollo web, fue con una página web para un lugar de comidas, en la que solamente se mostraban los productos, junto a sus gustos, y variedades. Toda la información que se renderizaba era de forma estática. (2018)',
      icon_tech: [
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg`,
        },
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg`,
        },
      ],
    },
    {
      thumbnail: `../../assets/images/yanina2.jpg`,
      title: 'Sitio Web',
      descrip:
        'En esta imagen se puede llegar a ver, la versión final de la página, hubo muchos cambios a la primera versión, con efectos de zoom realizados en CSS, una galería de fotos mostrando las distintas variedades de productos.',
      icon_tech: [
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg`,
        },
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg`,
        },
      ],
    },
    {
      thumbnail: `../../assets/images/app_rickandmorty.jpg`,
      title: 'Rick and Morty app',
      descrip:
        'Proyecto creado en Angular, utilizando servicios y la api de rickandmortyapi.com. Este proyecto contiene búsqueda de personajes y un paginador para ver cada personaje con sus características',
      link: 'https://lucid-agnesi-24cd52.netlify.app',
      icon_tech: [
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg`,
        },
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg`,
        },
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg`,
        },
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-plain.svg`,
        },
      ],
    },
    {
      thumbnail: `../../assets/images/Weatherappangular.jpg`,
      title: 'Weather app',
      descrip:
        'Realice una app para el clima con Angular, en donde utilice la API de <strong>openweatherapi</strong>. Su diseño está logrado con flexbox y css grid. En cada parte de la app utilicé templates, rutas, servicios, paths, entre otros. <strong>(Actualmente me encuentro mejorando la parte visual de esta app)</strong>',
      link: 'https://frosty-mcclintock-617535.netlify.app',
      icon_tech: [
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg`,
        },
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg`,
        },
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg`,
        },
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg`,
        },
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-plain.svg`,
        },
      ],
    },
    {
      thumbnail: `../../assets/images/todolist.jpg`,
      title: 'TO DO list',
      descrip:
        'Esta app realizada en Angular, es un to-do list, utilice componentes de bootstrap para su diseño.',
      link: 'https://objective-torvalds-35b397.netlify.app/',
      icon_tech: [
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg`,
        },
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg`,
        },
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain.svg`,
        },
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg`,
        },
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg`,
        },
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-plain.svg`,
        },
      ],
    },
    {
      thumbnail: `../../assets/images/form-validator2.jpg`,
      title: 'Form Validator',
      descrip:
        'Este es un formulario construido con los componentes de bootstrap. Este pequeño proyecto no está terminado completamente. Es una práctica en donde utilice progressive web apps (PWA) de Angular.',
      link: 'https://trusting-turing-fb5dd1.netlify.app/form',
      icon_tech: [
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg`,
        },
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg`,
        },
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain.svg`,
        },
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg`,
        },
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg`,
        },
        {
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-plain.svg`,
        },
      ],
    },
  ];

  constructor(private router: Router, private route:ActivatedRoute) {
    this.nameParam = this.route.snapshot.paramMap.get('name');
    console.log('Obtuve el nameparam',this.nameParam);
  }

  ngOnInit(): void {

  }

  backToTech() {
    this.router.navigate(['/tech']);

  }
}

class LinkModel {
  thumbnail: string;
  title: string;
  descrip: string;
  link?: string;
  icon_tech: any[];
}
