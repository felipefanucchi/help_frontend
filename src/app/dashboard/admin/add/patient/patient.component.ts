import { Component } from "@angular/core";
import { Help, Patient } from '../../../../models';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../../environments/environment';
import { NbToastrService } from '@nebular/theme';

@Component({
	selector: 'admin-add-help-crew',
	template: `
	<app-create 
		name="Paciente" 
		[custom_fields]="[]"
		[hide_fields]="[ 'email' ]"
		[finished]="finished"
		(event_submitted)="handleSubmit($event)"
	></app-create>`
})
export class AddPatientComponent {
	finished: boolean;

	constructor(
		private http: HttpClient,
		private toastrService: NbToastrService,
	) { }

	handleSubmit(data: Patient) {
		this.http.post(`${environment.api}/cares/patient/`, data)
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