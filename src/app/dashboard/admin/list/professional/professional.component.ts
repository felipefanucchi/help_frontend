import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
	selector: 'admin-smart-table-professional',
	template: `
		<app-smart-user-table
			[columns]="columns"
			role="Profissional"
			[data]="data"
		></app-smart-user-table>
	`
})

export class ListProfessionalComponent implements OnInit {
	columns = {
		register_code: {
			title: 'Código de Registro',
			type: 'string'
		},
		cost: {
			title: 'Preço',
			type: 'string'
		},
		service: {
			title: 'Serviço',
			type: 'string'
		}
	};

	data: Array<any>;

	constructor(
		private http: HttpClient
	) {}

	ngOnInit(): void {
		this.http.get(`${environment.api}/accounts/profesionals/`)
			.subscribe(response => this.parseResponse(response));
	}

	private parseResponse(response) {
		this.data = response.results;
	}
}
