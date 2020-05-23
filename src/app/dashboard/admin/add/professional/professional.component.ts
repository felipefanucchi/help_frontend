import { Component } from "@angular/core";
import { Professional } from '../../../../models';

@Component({
	selector: 'admin-add-professional',
	template: `
	<app-create-user 
		[custom_fields]="fields" 
		role="Profissional" 
		(event_submitted)="handleSubmit($event)"
	></app-create-user>`
})
export class AddProfessionalComponent {
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
			placeholder: 'CRx'
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

	handleSubmit(data: Professional): void {
		console.log(data, ' This data goes to API.')
	}
}