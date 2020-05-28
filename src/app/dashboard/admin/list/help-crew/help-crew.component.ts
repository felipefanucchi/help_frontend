import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { ListResponse } from '../../../../interfaces';
import { Help } from '../../../../models';
import { NbToastrService, NbToastrConfig } from '@nebular/theme';

@Component({
	selector: 'admin-smart-table-help-crew',
	template: `
		<app-smart-user-table
			role="Equipe Help"
			[data]="data"
			(delete)="handleDelete($event)"
			[deleted]="deleted"
		></app-smart-user-table>
	`
})

export class ListHelpCrewComponent implements OnInit {
	data: Array<any>;
	deleted: boolean;

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.http.get(`${environment.api}/accounts/help/`)
			.subscribe((response: ListResponse<Help>) => this.parseResponse(response));
	}

	private parseResponse(response: ListResponse<Help>) {
		this.data = response.results;
	}

	handleDelete($event) {
		if (!$event.data) return;
		
		const data: Help = $event.data;
		const id = data.id;

		this.http.delete(`${environment.api}/accounts/help/${id}`)
			.subscribe(() => this.deleted = true);
	}

}

