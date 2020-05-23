import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AddProfessionalComponent } from './add/professional/professional.component';
import { AddCustomerComponent } from './add/customer/customer.component';
import { AddAdministratorComponent } from './add/administrator/administrator.component';
import { AddHelpCrewComponent } from './add/help-crew/help-crew.component';

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
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {
}