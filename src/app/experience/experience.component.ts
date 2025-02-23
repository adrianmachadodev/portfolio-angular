import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experienceObj: mockExp[] = [];
  experienceTitle: string = 'Experiencia';
  connectMessage: string = 'Con disponibilidad para colaborar y aportar valor.';
  textConnect: string = `Soy un apasionado de la tecnología donde siempre me encuentro en constante aprendizaje y estoy interesado en colaborar en nuevos proyectos. Explorar nuevas herramientas y técnicas que me permitan ofrecer soluciones innovadoras y de alto rendimiento. Si estás interesado en trabajar juntos o necesitas más información, no dudes en contactarme.`;

  constructor() {}

  ngOnInit(): void {
    this.experienceObj = [
      {
        dateExp: 'Abril 2023 - Actualidad',
        positionWork: 'Desarrollador Angular',
        titleCompany: 'Moebius Argentina Incoming DMC',
        descriptExp: `He participado en el desarrollo de nuevas funcionalidades y mejoras en la interfaz de usuario, garantizando una experiencia fluida y optimizada.
        Implementación de RxJS para gestionar flujos de datos asíncronos, lo que permite una manipulación eficiente de la información en tiempo real. <br> <br>
        Colaboración en la integración de APIs RESTful, facilitando la comunicación entre el frontend y los servicios backend, incluyendo el manejo de respuestas y su correcta visualización en la interfaz.<br> <br>
        Optimización del diseño y la usabilidad de la aplicación mediante la adición de nuevas características y comportamientos interactivos.
        Resolución de problemas técnicos clave y mejora continua del rendimiento de la aplicación. `,
        logoCompany: '../../assets/logo-company/companies/moebius_1.webp',
      },
      {
        dateExp: 'Abril 2022 - Junio 2022',
        positionWork: 'Desarrollador Angular',
        titleCompany: 'MobyDigital',
        descriptExp: `He realizado distintas actividades durante mi estadía en el puesto de desarrollador Angular, los labores efectuados serían la creación de nuevos componentes reutilizables, solucionar errores y generar nuevas funcionalidades al proyecto, agregar características como los interceptors donde se capturaba los errores de las peticiones HTTP.<br> <br> He trabajado con la librería de Angular Material y PrimeNG. Maquetación y creación de componentes.`,
        logoCompany: '../../assets/logo-company/companies/mobydigital_1.webp',
      },
      {
        dateExp: 'Mayo 2018 - Febrero 2019',
        positionWork: 'Web Designer Freelance',
        titleCompany: 'Yanina',
        descriptExp: `Como diseñador web mi participación en este proyecto freelance era la creación de un sitio web desde cero utilizando HTML y CSS. El sitio en cuestión era para el sector gastronómico, en donde se debía visualizar los productos.`,
        logoCompany: '../../assets/logo-company/companies/logo_default.webp',
      },
    ];
  }

  capitalizeInfoCompany(companyInfo: string) {
    return companyInfo.toLocaleUpperCase();
  }
}

class mockExp {
  dateExp: string;
  positionWork: string;
  titleCompany: string;
  descriptExp: string;
  logoCompany: string;
}
