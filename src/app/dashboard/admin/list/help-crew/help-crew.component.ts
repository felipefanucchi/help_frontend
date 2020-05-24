import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
	selector: 'admin-smart-table-help-crew',
	template: `
		<app-smart-user-table
			role="Equipe Help"
			[data]="data"
			(delete)="handleDelete($event)"
			[deleted_event]="deletedEvent"
		></app-smart-user-table>
	`
})

export class ListHelpCrewComponent implements OnInit {
	data: Array<any>;
	deletedEvent: any;

	constructor(
		private http: HttpClient
	) {}

	ngOnInit(): void {
		this.http.get(`${environment.api}/accounts/admin/`)
			.subscribe((response) => this.parseResponse(response));
	}

	private parseResponse(response) {
		this.data = response.results;
	}

	handleDelete($event) {
		if (!$event.data) return;
		
		const id = $event.data.id;

		this.http.delete(`${environment.api}/accounts/admin/${id}`)
			.subscribe(() => this.deletedEvent = $event);
	}
}