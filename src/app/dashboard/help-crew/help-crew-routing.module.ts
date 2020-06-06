import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HelpCrewAddProfessionalComponent } from './add/professional/professional.component';
import { HelpCrewAddCustomerComponent } from './add/customer/customer.component';
import { HelpCrewAddPatientComponent } from './add/patient/patient.component';
import { HelpCrewListProfessionalComponent } from './list/professional/professional.component';
import { HelpCrewListCustomerComponent } from './list/customer/customer.component';
import { HelpCrewListPatientComponent } from './list/patient/patient.component';
import { HelpCrewAddCareComponent } from './add/care/care.component';

const routes: Routes = [
	{
		path: 'adicionar',
		children: [
			{
				path: 'profissional',
				component: HelpCrewAddProfessionalComponent
			},
			{
				path: 'contratante',
				component: HelpCrewAddCustomerComponent
			},
			{
				path: 'paciente',
				component: HelpCrewAddPatientComponent
			},
			{
				path: 'tratamento',
				component: HelpCrewAddCareComponent
			},
		],
	},
	{
		path: 'lista',
		children: [
			{
				path: 'profissional',
				component: HelpCrewListProfessionalComponent
			},
			{
				path: 'contratante',
				component: HelpCrewListCustomerComponent
			},
			{
				path: 'paciente',
				component: HelpCrewListPatientComponent
			},
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HelpCrewRoutingModule {
}