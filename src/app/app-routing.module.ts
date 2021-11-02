import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./form/form.module').then((m) => m.FormModule),
  },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/form' }],
})
export class AppRoutingModule {}
