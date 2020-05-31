import { Component } from "@angular/core";
import { Professional } from '../../../../models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { NbToastrService } from '@nebular/theme';

@Component({
	selector: 'help-crew-add-professional',
	template: `
	<app-create 
		[custom_fields]="fields" 
		name="Profissional" 
		(event_submitted)="handleSubmit($event)"
		[finished]="finished"
	></app-create>`
})
export class HelpCrewAddProfessionalComponent {
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
			placeholder: 'CRx',
			name: 'register_code'
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
	finished: boolean;
	
	constructor(
		private http: HttpClient,
		private toastrService: NbToastrService
	) {}

	handleSubmit(data: Professional): void {
		console.log(data, ' This data goes to API.');

		// Mocking coordinates just for test ends.
		Object.assign(data, {
			coordinates: [null, null]
		});
		
		this.http.post(`${environment.api}/accounts/profesionals/`, data)
			.subscribe(() => {
				this.finished = true;
				this.showFormSentToast('top-right', 'success');
			});
	}

	showFormSentToast(position, status) {
		const iconConfig = {
			position,
			status
		};
		
    this.toastrService.show('Formulário submetido', 'Sucesso', iconConfig);
  }
}