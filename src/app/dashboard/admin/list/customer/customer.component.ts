import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { ListResponse } from '../../../../interfaces';
import { Help, Customer } from '../../../../models';

@Component({
	selector: 'admin-smart-table-customer',
	template: `
		<app-smart-user-table
			[columns]="columns"
			role="Contratante"
			[data]="data"
			(delete)="handleDelete($event)"
			[deleted]="deleted"
			[edited]="edited"
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

	handleDelete($event) {
		if (!$event.data) return;
		
		const data: Customer = $event.data;
		const id = $event.data.id;

		this.http.delete(`${environment.api}/accounts/customers/${id}`)
			.subscribe(() => this.deleted = true);
	}
	
	handleEdit($event) {
		if (!$event.data) return;
		
		const data: Customer = $event.data;
		const id = data.id;

		this.http.put(`${environment.api}/accounts/customers/${id}`, data)
			.subscribe(() => this.edited = true);
	}
}