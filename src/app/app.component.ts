import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio-angular-app';
  config: any;

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const appRoot = document.querySelector('app-root') as HTMLElement;

    const splash = document.getElementById('splash-img');
    setTimeout(() => {
      if(splash) splash.remove();

      if(appRoot) appRoot.style.display = 'block';


      if (splash) {
        splash.style.display = 'none';
      }
    }, 1500);
  }
}
