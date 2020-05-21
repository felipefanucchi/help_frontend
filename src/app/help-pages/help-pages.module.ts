import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { HelpPagesComponent } from './help-pages.component';
import { ThemeModule } from '../@theme/theme.module';
import { HelpPagesRoutingModule } from './help-pages-routing.module';


@NgModule({
  imports: [
    HelpPagesRoutingModule,
    ThemeModule,
    NbMenuModule,
  ],
  declarations: [
    HelpPagesComponent,
  ],
})
export class HelpPagesModule {
}
