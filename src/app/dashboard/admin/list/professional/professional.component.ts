import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { ListResponse } from '../../../../interfaces';
import { Professional } from '../../../../models';

@Component({
	selector: 'admin-smart-table-professional',
	template: `
		<app-smart-listing-table
			name="Profissional"
			[columns]="columns"
			[data]="data"
			[deleted]="deleted"
			[edited]="edited"
			(delete)="handleDelete($event)"
			(edit)="handleEdit($event)"
		></app-smart-listing-table>
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
		},
		email: {
			title: 'E-mail',
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
		this.http.get(`${environment.api}/accounts/profesionals/`)
			.subscribe((response: ListResponse<Professional>) => this.parseResponse(response));
	}

	private parseResponse(response : ListResponse<Professional>) {
		this.data = response.results;
	}

	handleDelete({ data }) {
		if (!data) return;
		const user: Professional = data;

		this.http.delete(`${environment.api}/accounts/profesionals/${user.id}`)
			.subscribe(() => this.deleted = true);
	}

	handleEdit({ data }) {
		if (!data) return;
		const user: Professional = data;

		this.http.put(`${environment.api}/accounts/profesionals/${user.id}/`, data)
			.subscribe(() => this.edited = true);
	}
}
