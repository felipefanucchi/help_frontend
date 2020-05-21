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
      path: '',
      redirectTo: 'home',
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
