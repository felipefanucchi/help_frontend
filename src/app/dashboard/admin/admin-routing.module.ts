import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AddProfessionalComponent } from './add/professional/professional.component';
import { AddCustomerComponent } from './add/customer/customer.component';

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
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {
}