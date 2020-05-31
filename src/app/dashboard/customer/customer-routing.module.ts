import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddCareComponent } from './add/care/care.component';

const routes: Routes = [
	{
		path: 'adicionar',
		children: [
			{
				path: 'servico',
				component: CustomerAddCareComponent
			},
		],
	},
	{
		path: 'lista',
		children: []
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CustomerRoutingModule {
}