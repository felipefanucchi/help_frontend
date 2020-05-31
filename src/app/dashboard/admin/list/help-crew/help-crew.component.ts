import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { ListResponse } from '../../../../interfaces';
import { Help } from '../../../../models';
import { NbToastrService, NbToastrConfig } from '@nebular/theme';

@Component({
	selector: 'admin-smart-table-help-crew',
	template: `
		<app-smart-listing-table
			name="Equipe Help"
			[data]="data"
			[deleted]="deleted"
			[edited]="edited"
			[columns]="columns"
			(delete)="handleDelete($event)"
			(edit)="handleEdit($event)"
		></app-smart-listing-table>
	`
})

export class ListHelpCrewComponent implements OnInit {
	data: Array<any>;
	deleted: boolean;
	edited: boolean;
	columns = {
		email: {
			title: 'E-mail',
			type: 'string'
		},
	};

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.http.get(`${environment.api}/accounts/help/`)
			.subscribe((response: ListResponse<Help>) => this.parseResponse(response));
	}

	private parseResponse(response: ListResponse<Help>) {
		this.data = response.results;
	}

	handleDelete({ data }) {
		if (!data) return;
		const user: Help = data;

		this.http.delete(`${environment.api}/accounts/help/${user.id}`)
			.subscribe(() => this.deleted = true);
	}
	
	handleEdit({ data }) {
		if (!data) return;
		const user: Help = data;

		this.http.put(`${environment.api}/accounts/help/${user.id}/`, user)
			.subscribe(() => this.edited = true);
	}
}

