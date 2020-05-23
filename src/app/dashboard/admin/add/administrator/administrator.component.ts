import { Component } from "@angular/core";
import { Admin } from '../../../../models';

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

	handleSubmit(data: Admin): void {
		console.log(data, ' This data goes to API.');
		Object.assign(data, {
			is_superadmin: true
		})
	}
}