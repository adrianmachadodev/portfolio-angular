import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { TechComponent } from './tech/tech.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  {
    path: 'tech',
    component: TechComponent,
    loadChildren: () => import('./tech/tech.module').then((m) => m.TechModule),
  },
  {
    path: 'works',
    component: WorksComponent,
    loadChildren: () =>
      import('./works/works.module').then((m) => m.WorksModule),
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    loadChildren: () =>
      import('./experience/experience.module').then((m) => m.ExperienceModule),
  },
  {
    path: '**',
    redirectTo: '/works',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
