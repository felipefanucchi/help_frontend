import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AddProfessionalComponent } from './add/professional/professional.component';
import { AddCustomerComponent } from './add/customer/customer.component';
import { AddAdministratorComponent } from './add/administrator/administrator.component';
import { AddHelpCrewComponent } from './add/help-crew/help-crew.component';
// import { AddPatientComponent } from './add/patient/patient.component';
import { ListProfessionalComponent } from './list/professional/professional.component';
import { ListCustomerComponent } from './list/customer/customer.component';
import { ListAdminComponent } from './list/admin/admin.component';
import { ListHelpCrewComponent } from './list/help-crew/help-crew.component';
import { ListPatientComponent } from './list/patient/patient.component';
import { AddPatientComponent } from './add/patient/patient.component';

const routes: Routes = [
	{
		path: 'adicionar',
		children: [
			{
				path: 'profissional',
				component: AddProfessionalComponent
			},
			{
				path: 'contratante',
				component: AddCustomerComponent
			},
			{
				path: 'administrador',
				component: AddAdministratorComponent
			},
			{
				path: 'equipe-help',
				component: AddHelpCrewComponent
			},
			{
				path: 'paciente',
				component: AddPatientComponent
			},
		],
	},
	{
		path: 'lista',
		children: [
			{
				path: 'profissional',
				component: ListProfessionalComponent
			},
			{
				path: 'contratante',
				component: ListCustomerComponent
			},
			{
				path: 'administrador',
				component: ListAdminComponent
			},
			{
				path: 'equipe-help',
				component: ListHelpCrewComponent
			},
			{
				path: 'paciente',
				component: ListPatientComponent
			},
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {
}