import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
})
export class WorksComponent implements OnInit {
  config: any;

  namesPage: Array<NoLInks> = [
    {
      thumbnail: '../../../assets/images/yanina2.jpg',
      descript:
        'Mi comienzo en el desarrollo web, fue con una página web para un lugar de comidas, en la que solamente se mostraban los productos, junto a sus gustos, y variedades. ',
    },
    {
      thumbnail: '../../../assets/images/yanina.jpg',
      descript:
        'En esta imagen se puede llegar a ver, la versión final de la página, hubo muchos cambios a la primera versión, con efectos de zoom realizados en CSS, una galería de fotos mostrando las distintas variedades de productos.',
    },
  ];

  images: Array<LinkModel> = [
    {
      thumbnail: '../../../assets/images/Calculadora.jpg',
      title: 'Calculadora - React',
      descrip:
        'Mi primera calculadora, esta misma cuenta con la característica que es una aplicación web progresiva (PWA) que fue realizada en react.',
      link: 'https://romantic-franklin-17897b.netlify.app/',
    },
    {
      thumbnail: '../../../assets/images/Weatherappangular.jpg',
      title: 'Weather app - Angular',
      descrip:
        'Realice una app para el clima con Angular, en donde utilice la API de "openweatherapi". Su diseño está logrado con flexbox y css grid. En cada parte de la app utilicé templates, rutas, servicios, paths, entre otros.',

      link: 'https://frosty-mcclintock-617535.netlify.app/',
    },

    {
      thumbnail: '../../../assets/images/todolist.jpg',
      title: 'To-do list - Angular',
      descrip:
        'Esta app realizada en Angular, es un "to-do list", utilice componentes de bootstrap para su diseño.',
      link: 'https://objective-torvalds-35b397.netlify.app/',
    },

    {
      thumbnail: '../../../assets/images/form-validator2.jpg',
      title: 'Form-Validator - Angular',
      descrip:
        'Este es un formulario construido con los componentes de bootstrap. Este pequeño proyecto, no está terminado completamente. Es una práctica en donde utilice progressive web apps (PWA) de Angular.',

      link: 'https://trusting-turing-fb5dd1.netlify.app/form',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

class NoLInks {
  thumbnail: string;
  descript: string;
}

class LinkModel {
  thumbnail: string;
  title: string;
  descrip: string;
  link: string;
}
