import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { Role } from '../models';
import { AuthGuard } from '../helpers';
import { DashboardComponent } from './dashboard.component';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module')
        .then(m => m.AdminModule),
      canActivate: [AuthGuard],
      data: {
        roles: [Role.Admin]
      }
    },
    {
      path: 'help',
      loadChildren: () => import('./help-crew/help-crew.module')
        .then(m => m.HelpCrewModule),
      canActivate: [AuthGuard],
      data: {
        roles: [Role.Help]
      }
    },
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
}
