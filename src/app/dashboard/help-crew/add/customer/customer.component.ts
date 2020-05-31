import { Component } from "@angular/core";
import { Customer } from '../../../../models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { NbToastrService } from '@nebular/theme';

@Component({
	selector: 'help-crew-add-customer',
	template: `
	<app-create 
		[custom_fields]="fields" 
		name="Contratante" 
		(event_submitted)="handleSubmit($event)"
		[finished]="finished"
	></app-create>`
})
export class HelpCrewAddCustomerComponent {
	fields = [
		{
			type: 'text',
			label: 'Preço',
			placeholder: 'R$ 99,90',
			name: 'cost'
		}
	];
	finished: boolean;

	constructor(
		private http: HttpClient,
		private toastrService: NbToastrService,
	) { }

	handleSubmit(data: Customer): void {
		this.http.post(`${environment.api}/accounts/customers/`, data)
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