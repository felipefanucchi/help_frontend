import { Component, OnInit } from "@angular/core";
import { Help, Patient, Customer, Professional } from '../../../../models';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../../environments/environment';
import { NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListResponse } from '../../../../interfaces';

@Component({
	selector: 'customer-add-care',
	templateUrl: './care.component.html'
})
export class CustomerAddCareComponent implements OnInit {
	finished: boolean;
	fields = [];
	customersCount: number;
	customersPage: number | null = 1;
	customers: Array<Customer> = [];

	constructor(
		private http: HttpClient,
		private toastrService: NbToastrService,
	) { }

	ngOnInit(): void {
		this.getCustomers().subscribe((customers: Customer[]) => {
			this.customers = customers;
			this.fields = [...this.fields, {
				type: 'select',
				label: 'Selecione um contratante',
				name: 'customer',
				options: customers
			}];
		});

		this.buildCustomFields();
	}

	handleSubmit(data: Patient) {
		this.http.post(`${environment.api}/cares/request/`, data)
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

		this.toastrService.show('Solicitação enviada. Aguarde um membro da equipe responde-la', 'Sucesso', iconConfig);
	}

	buildCustomFields(): void {
		this.fields = [...this.fields, 
			{
				type: 'select',
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
			},
		];
	}

	parseCustomers(response: ListResponse<Customer>): Array<Customer> {
		this.customersPage = response.next;
		this.customersCount = response.count;
		this.customers = response.results;
		return response.results;
	}

	getCustomers(): Observable<Array<Customer>> {
		return this.http.get(`${environment.api}/accounts/customers/`)
			.pipe(map(this.parseCustomers));
	}
}