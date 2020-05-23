import { Component } from "@angular/core";

@Component({
	selector: 'admin-add-administrator',
	template: `
	<app-create-user 
		[custom_fields]="fields" 
		role="Administrador" 
		(event_submitted)="handleSubmit($event)"
	></app-create-user>`
})
export class AddAdministratorComponent {
	fields = [
		{
			type: 'text',
			label: 'Preço',
			placeholder: 'R$ 99,90',
			name: 'cost'
		},
		{
			type: 'text',
			label: 'Número de Registro',
			placeholder: ''
		},
		{
			type: 'radio',
			label: 'Serviços',
			name: 'service',
			options: [
				{
					value: 'speech_therapist',
					label: 'Fonoaudiólogo'
				},
				{
					value: 'phisiotherapy',
					label: 'Fisioterapeuta'
				},
				{
					value: 'occupational_therapy',
					label: 'Terapia Ocupacional'
				},
			]
		}
	];
	
	constructor() {}

	handleSubmit(data) {
		console.log(data, ' This data goes to API.')
	}
}