import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { Role } from '../models';
import { AuthGuard } from '../helpers';
import { HelpMainComponent } from './help.component';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: HelpMainComponent,
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
export class HelpRoutingModule {
}
