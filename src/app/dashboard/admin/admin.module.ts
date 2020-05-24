import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { AddProfessionalComponent } from './add/professional/professional.component';
import { AddCustomerComponent } from './add/customer/customer.component';
import { AddAdministratorComponent } from './add/administrator/administrator.component';
import { AddHelpCrewComponent } from './add/help-crew/help-crew.component';
import { ListCustomerComponent } from './list/customer/customer.component';
import { ListProfessionalComponent } from './list/professional/professional.component';

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
		ListCustomerComponent,
		ListProfessionalComponent
	],
})
export class AdminModule {
}
