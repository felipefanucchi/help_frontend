import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { AddProfessionalComponent } from './add/professional/professional.component';
import { AddCustomerComponent } from './add/customer/customer.component';
import { AddAdministratorComponent } from './add/administrator/administrator.component';
import { AddHelpCrewComponent } from './add/help-crew/help-crew.component';

@NgModule({
  imports: [
		AdminRoutingModule,
		ComponentsModule,
  ],
  declarations: [
		AddProfessionalComponent,
		AddCustomerComponent,
		AddAdministratorComponent,
		AddHelpCrewComponent,
	],
})
export class AdminModule {
}
