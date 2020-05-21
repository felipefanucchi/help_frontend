import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { DashboardComponent } from './dashboard.component';
import { ThemeModule } from '../@theme/theme.module';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  imports: [
    DashboardRoutingModule,
    ThemeModule,
    NbMenuModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule {
}
