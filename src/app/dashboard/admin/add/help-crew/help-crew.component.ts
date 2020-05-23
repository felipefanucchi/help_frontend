import { Component } from "@angular/core";

@Component({
	selector: 'admin-add-help-crew',
	template: `
	<app-create-user 
		[custom_fields]="[]" 
		role="Membro Equipe Help" 
		(event_submitted)="handleSubmit($event)"
	></app-create-user>`
})
export class AddHelpCrewComponent {
	constructor() {}

	handleSubmit(data) {
		console.log(data, ' This data goes to API.')
	}
}