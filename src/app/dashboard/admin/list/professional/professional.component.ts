import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { ListResponse } from '../../../../interfaces';
import { Professional } from '../../../../models';

@Component({
	selector: 'admin-smart-table-professional',
	template: `
		<app-smart-user-table
			[columns]="columns"
			role="Profissional"
			[data]="data"
			(delete)="handleDelete($event)"
			[deleted]="deleted"
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
	deleted = true;

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

	handleDelete($event) {
		if (!$event.data) return;
		
		const id = $event.data.id;

		this.http.delete(`${environment.api}/accounts/profesionals/${id}`)
			.subscribe(() => this.deleted = true);
	}
}
