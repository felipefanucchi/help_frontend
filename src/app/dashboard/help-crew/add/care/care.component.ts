import { Component, OnInit } from "@angular/core";
import { Help, Patient, Customer, Professional } from '../../../../models';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../../environments/environment';
import { NbToastrService } from '@nebular/theme';
import { map, debounceTime } from 'rxjs/operators';
import { Observable, PartialObserver } from 'rxjs';
import { ListResponse } from '../../../../interfaces';

@Component({
	selector: 'admin-add-patient',
	templateUrl: './care.component.html'
})
export class HelpCrewAddCareComponent implements OnInit {
	finished: boolean;
	customersCount: number;
	customersPage: number | null = 1;
	customers: Array<Customer> = [];
	professionalsCount: number;
	professionalsPage: number | null = 1;
	professionals: Array<Professional> = [];
	fields = [];

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

		this.getProfessionals().subscribe((professionals: Professional[]) => {
			this.professionals = professionals;
			this.fields = [...this.fields, {
				type: 'select',
				label: 'Selecione um profissional',
				name: 'professional',
				options: professionals
			}];
		});

		this.buildCustomFields();
	}

	handleSubmit(data: Patient) {
		this.http.post(`${environment.api}/cares/`, data)
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

	getCustomers(): Observable<Array<Customer>> {
		return this.http.get(`${environment.api}/accounts/customers/`)
			.pipe(map(this.parseCustomers));
	}

	getProfessionals(): Observable<Array<Professional>> {
		return this.http.get(`${environment.api}/accounts/profesionals/`)
			.pipe(map(this.parseProfessionals));
	}

	parseCustomers(response: ListResponse<Customer>): Array<Customer> {
		this.customersPage = response.next;
		this.customersCount = response.count;
		this.customers = response.results;
		return response.results;
	}

	parseProfessionals(response: ListResponse<Professional>): Array<Professional> {
		this.professionalsPage = response.next;
		this.professionalsCount = response.count;
		this.professionals = response.results;
		return response.results;
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
			{
				type: 'text',
				label: 'Preço',
				placeholder: 'R$ 99,90',
				name: 'cost'
			},
			{
				type: 'text',
				label: 'Valor',
				placeholder: 'R$ 99,90',
				name: 'value'
			},
			{
				type: 'text',
				label: 'Início',
				placeholder: '99/99/9999',
				name: 'start_at'
			},
			{
				type: 'text',
				label: 'Término',
				placeholder: '99/99/9999',
				name: 'end_at'
			},
			{
				type: 'select',
				label: 'Andamento',
				name: 'status',
				options: [
					{
						value: 'assessment',
						label: 'Avaliação'
					},
					{
						value: 'emergency_assessment',
						label: 'Avaliação de Emergência'
					},
					{
						value: 'prospection',
						label: 'Prospecção'
					},
					{
						value: 'resume',
						label: 'Resumo'
					},
					{
						value: 'suspended',
						label: 'Suspenso'
					},
					{
						value: 'cancelled_by_customer',
						label: 'Cancelado pelo cliente'
					},
					{
						value: 'in_attendance',
						label: 'Em Atendimento'
					},
				]
			}
		];
	}
}