import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { HelpMainComponent } from './help.component';
import { ThemeModule } from '../@theme/theme.module';
import { HelpRoutingModule } from './help-routing.module';


@NgModule({
  imports: [
    HelpRoutingModule,
    ThemeModule,
    NbMenuModule,
  ],
  declarations: [
    HelpMainComponent,
  ],
})
export class HelpModule {
}
