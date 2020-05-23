import { Component } from "@angular/core";
import { Admin } from '../../../../models';

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

	handleSubmit(data: Admin): void {
		console.log(data, ' This data goes to API.');
		Object.assign(data, {
			is_superadmin: true
		})
	}
}