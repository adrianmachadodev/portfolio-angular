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
    path: 'tech',
    children: [
      {
        path: 'projects/:name',
        component: WorksComponent,
      },
    ],
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    loadChildren: () =>
      import('./experience/experience.module').then((m) => m.ExperienceModule),
  },
  
  {
    path: '**',
    redirectTo: '/experience',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
