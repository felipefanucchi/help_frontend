import { Component } from "@angular/core";

@Component({
	selector: 'admin-add-customer',
	template: `
	<app-create-user 
		[custom_fields]="fields" 
		role="Contratante" 
		(event_submitted)="handleSubmit($event)"
	></app-create-user>`
})
export class AddCustomerComponent {
	fields = [
		{
			type: 'text',
			label: 'Preço',
			placeholder: 'R$ 99,90',
			name: 'cost'
		}
	];

	constructor() { }

	handleSubmit(data) {
		console.log(data, ' This data goes to API.')
	}
}