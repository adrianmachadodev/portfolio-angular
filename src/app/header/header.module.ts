import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { AppModule } from '../app.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderRoutingModule],
})
export class HeaderModule {}
