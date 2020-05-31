import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { ListResponse } from '../../../../interfaces';
import { Patient } from '../../../../models';

@Component({
	selector: 'admin-smart-listing-table-patient',
	template: `
		<app-smart-listing-table
			[columns]="columns"
			name="Paciente"
			[data]="data"
			[deleted]="deleted"
			[edited]="edited"
			[hide_columns]="['email','address_number','address_complement']"
			(delete)="handleDelete($event)"
			(edit)="handleEdit($event)"
		></app-smart-listing-table>
	`
})

export class ListPatientComponent implements OnInit {
	columns = {
		phones: {
			title: 'Telefones',
			type: 'string'
		},
	};

	data: Array<any>;
	deleted: boolean;
	edited: boolean;

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.http.get(`${environment.api}/cares/patients/`)
			.subscribe((response: ListResponse<Patient>) => this.parseResponse(response));
	}

	private parseResponse(response: ListResponse<Patient>) {
		this.data = response.results;
	}

	handleDelete({ data }) {
		if (!data) return;
		const patient: Patient = data;

		this.http.delete(`${environment.api}/cares/patients/${patient.id}`)
			.subscribe(() => this.deleted = true);
	}

	handleEdit({ data }) {
		if (!data) return;
		const patient: Patient = data;

		this.http.put(`${environment.api}/cares/patients/${patient.id}/`, patient)
			.subscribe(() => this.edited = true);
	}
}

