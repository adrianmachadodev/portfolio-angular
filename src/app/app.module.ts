import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WorksComponent } from './works/works.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TechComponent } from './tech/tech.component';
import { RouterModule } from '@angular/router';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    WorksComponent,
    TechComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    PerfectScrollbarModule,
  ],
  exports: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    WorksComponent,
    TechComponent,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
