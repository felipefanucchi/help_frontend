import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Admin } from '../../../../models';
import { ListResponse } from '../../../../interfaces';
import { NbToastrService, NbToastrConfig } from '@nebular/theme';

@Component({
	selector: 'admin-smart-table-admin',
	template: `
		<app-smart-listing-table
			name="Administrador"
			[data]="data"
			[deleted]="deleted"
			[edited]="edited"
			(delete)="handleDelete($event)"
			(edit)="handleEdit($event)"
		></app-smart-listing-table>
	`
})

export class ListAdminComponent implements OnInit {
	data: Array<any>;
	deleted: boolean;
	edited: boolean;

	constructor(
		private http: HttpClient,
	) {}

	ngOnInit(): void {
		this.http.get(`${environment.api}/accounts/admin/`)
			.subscribe((response: ListResponse<Admin>) => this.parseResponse(response));
	}

	private parseResponse(response: ListResponse<Admin>) {
		this.data = response.results;
	}

	handleDelete({ data }) {
		if (!data) return;
		const user: Admin = data;

		this.http.delete(`${environment.api}/accounts/admin/${user.id}`)
			.subscribe(() => this.deleted = true);
	}

	handleEdit({ data }) {
		if (!data) return;
		const user: Admin = data;

		this.http.put(`${environment.api}/accounts/admin/${user.id}/`, user)
			.subscribe(response => this.edited = true);
	}

}