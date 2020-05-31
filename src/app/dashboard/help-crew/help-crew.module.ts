import { NgModule } from '@angular/core';
import { HelpCrewRoutingModule } from './help-crew-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { HelpCrewAddProfessionalComponent } from './add/professional/professional.component';
import { HelpCrewAddCustomerComponent } from './add/customer/customer.component';
import { HelpCrewListCustomerComponent } from './list/customer/customer.component';
import { HelpCrewListProfessionalComponent } from './list/professional/professional.component';
import { HelpCrewListPatientComponent } from './list/patient/patient.component';
import { HelpCrewAddPatientComponent } from './add/patient/patient.component';
import { HelpCrewAddCareComponent } from './add/care/care.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
		HelpCrewRoutingModule,
		ComponentsModule,
		CommonModule
  ],
  declarations: [
		HelpCrewAddProfessionalComponent,
		HelpCrewAddCustomerComponent,
		HelpCrewAddPatientComponent,
		HelpCrewAddCareComponent,
		HelpCrewListCustomerComponent,
		HelpCrewListProfessionalComponent,
		HelpCrewListPatientComponent
	],
})
export class HelpCrewModule {
}
