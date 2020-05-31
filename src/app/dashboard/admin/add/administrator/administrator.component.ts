import { Component } from "@angular/core";
import { Admin } from '../../../../models';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../../environments/environment';
import { NbToastrService } from '@nebular/theme';

@Component({
	selector: 'admin-add-administrator',
	template: `
	<app-create 
		[custom_fields]="[]" 
		name="Administrador" 
		(event_submitted)="handleSubmit($event)"
		[finished]="finished"
	></app-create>`
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