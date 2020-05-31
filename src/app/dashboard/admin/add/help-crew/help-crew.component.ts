import { Component } from "@angular/core";
import { Help } from '../../../../models';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../../environments/environment';
import { NbToastrService } from '@nebular/theme';

@Component({
	selector: 'admin-add-help-crew',
	template: `
	<app-create 
		[custom_fields]="[]" 
		name="Membro Equipe Help" 
		(event_submitted)="handleSubmit($event)"
		[finished]="finished"
	></app-create>`
})
export class AddHelpCrewComponent {
	finished: boolean;

	constructor(
		private http: HttpClient,
		private toastrService: NbToastrService,
	) { }

	handleSubmit(data: Help) {
		this.http.post(`${environment.api}/accounts/help/`, data)
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