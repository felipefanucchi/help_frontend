import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Admin } from '../../../../models';
import { ListResponse } from '../../../../interfaces';

@Component({
	selector: 'admin-smart-table-admin',
	template: `
		<app-smart-user-table
			role="Administrador"
			[data]="data"
			(delete)="handleDelete($event)"
			[deleted_event]="deletedEvent"
		></app-smart-user-table>
	`
})

export class ListAdminComponent implements OnInit {
	data: Array<any>;
	deletedEvent: any;

	constructor(
		private http: HttpClient
	) {}

	ngOnInit(): void {
		this.http.get(`${environment.api}/accounts/admin/`)
			.subscribe((response: ListResponse<Admin>) => this.parseResponse(response));
	}

	private parseResponse(response: ListResponse<Admin>) {
		this.data = response.results;
	}

	handleDelete($event) {
		if (!$event.data) return;
		
		const id = $event.data.id;

		this.http.delete(`${environment.api}/accounts/admin/${id}`)
			.subscribe(() => this.deletedEvent = $event);
	}
}