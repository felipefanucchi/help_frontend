import { Component } from "@angular/core";
import { Admin } from '../../../../models';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../../environments/environment';
import { NbToastrService } from '@nebular/theme';

@Component({
	selector: 'admin-add-administrator',
	template: `
	<app-create-user 
		[custom_fields]="[]" 
		role="Administrador" 
		(event_submitted)="handleSubmit($event)"
		[finished]="finished"
	></app-create-user>`
})
export class AddAdministratorComponent {
	finished: boolean;

	constructor(
		private http: HttpClient,
		private toastrService: NbToastrService,
	) {}

	handleSubmit(data: Admin): void {
		Object.assign(data, {
			is_superuser: true
		})

		this.http.post(`${environment.api}/accounts/admin/`, data)
			.subscribe(response => {
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