import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
	selector: 'admin-smart-table-customer',
	template: `
		<app-smart-user-table
			[columns]="columns"
			role="Contratante"
			[data]="data"
		></app-smart-user-table>
	`
})

export class ListCustomerComponent implements OnInit {
	columns = {
		value: {
			title: 'Preço',
			type: 'string'
		}
	};

	data: Array<any>;

	constructor(
		private http: HttpClient
	) {}

	ngOnInit(): void {
		this.http.get(`${environment.api}/accounts/customers/`)
			.subscribe((response) => this.parseResponse(response));
	}

	private parseResponse(response) {
		this.data = response.results;
	}
}