import { Component } from "@angular/core";

@Component({
	selector: 'admin-add-administrator',
	template: `
	<app-create-user 
		[custom_fields]="[]" 
		role="Administrador" 
		(event_submitted)="handleSubmit($event)"
	></app-create-user>`
})
export class AddAdministratorComponent {
	constructor() {}

	handleSubmit(data) {
		console.log(data, ' This data goes to API.')
	}
}