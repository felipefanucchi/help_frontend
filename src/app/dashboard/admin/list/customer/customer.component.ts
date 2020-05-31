import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { ListResponse } from '../../../../interfaces';
import { Help, Customer } from '../../../../models';

@Component({
	selector: 'admin-smart-table-customer',
	template: `
		<app-smart-listing-table
			[columns]="columns"
			name="Contratante"
			[data]="data"
			(delete)="handleDelete($event)"
			(edit)="handleEdit($event)"
			[deleted]="deleted"
			[edited]="edited"
		></app-smart-listing-table>
	`
})

export class ListCustomerComponent implements OnInit {
	columns = {
		value: {
			title: 'Preço',
			type: 'string'
		},
	};

	data: Array<any>;
	deleted: boolean;
	edited: boolean;

	constructor(
		private http: HttpClient
	) {}

	ngOnInit(): void {
		this.http.get(`${environment.api}/accounts/customers/`)
			.subscribe((response: ListResponse<Customer>) => this.parseResponse(response));
	}

	private parseResponse(response: ListResponse<Customer>) {
		this.data = response.results;
	}

	handleDelete({ data }) {
		if (!data) return;
		const user: Customer = data;

		this.http.delete(`${environment.api}/accounts/customers/${user.id}`)
			.subscribe(() => this.deleted = true);
	}

	handleEdit({ data }) {
		if (!data) return;
		const user: Customer = data;

		this.http.put(`${environment.api}/accounts/customers/${user.id}/`, user)
			.subscribe(() => this.edited = true);
	}
}