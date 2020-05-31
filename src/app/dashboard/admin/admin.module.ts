import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { AddProfessionalComponent } from './add/professional/professional.component';
import { AddCustomerComponent } from './add/customer/customer.component';
import { AddAdministratorComponent } from './add/administrator/administrator.component';
import { AddHelpCrewComponent } from './add/help-crew/help-crew.component';
import { ListCustomerComponent } from './list/customer/customer.component';
import { ListProfessionalComponent } from './list/professional/professional.component';
import { ListAdminComponent } from './list/admin/admin.component';
import { ListHelpCrewComponent } from './list/help-crew/help-crew.component';
import { ListPatientComponent } from './list/patient/patient.component';
import { AddPatientComponent } from './add/patient/patient.component';
import { AddCareComponent } from './add/care/care.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
		AdminRoutingModule,
		ComponentsModule,
		CommonModule
  ],
  declarations: [
		AddProfessionalComponent,
		AddCustomerComponent,
		AddAdministratorComponent,
		AddHelpCrewComponent,
		AddPatientComponent,
		AddCareComponent,
		ListCustomerComponent,
		ListProfessionalComponent,
		ListAdminComponent,
		ListHelpCrewComponent,
		ListPatientComponent
	],
})
export class AdminModule {
}
