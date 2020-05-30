import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { ListResponse } from '../../../../interfaces';
import { Help } from '../../../../models';

@Component({
	selector: 'admin-smart-listing-table-patient',
	template: `
        <app-smart-listing-table
            [columns]="columns"
			objectName="Paciente"
			[data]="data"
			(delete)="handleDelete($event)"
			(edit)="handleEdit($event)"
			[deleted]="deleted"
			[edited]="edited"
		></app-smart-listing-table>
	`
})

export class ListPatientComponent implements OnInit {
    columns: {
        id: {
			title: 'ID',
			type: 'number'
		},
		document_number: {
			title: 'Documento',
			type: 'string'
		},
		name: {
			title: 'Nome',
			type: 'string'
        },
        postal_code: {
			title: 'CEP',
			type: 'number'
		},
		address: {
			title: 'Endereço',
			type: 'string'
		},
		neighborhood: {
			title: 'Bairro',
			type: 'string'
        },
        city: {
			title: 'Cidade',
			type: 'string'
		},
		state: {
			title: 'Estado',
			type: 'string'
		},
		phones: {
			title: 'Telefone(s)',
			type: 'string'
        },
        birthday: {
            title: 'Nascimento',
            type: 'string'
        }
    };

	data: Array<any>;
	deleted: boolean;
    edited: boolean;    

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
        // mock return until api works
        this.data = [
            {
                "id": 0,
                "document_number": "string",
                "name": "string",
                "postal_code": "string",
                "address": "string",
                "neighborhood": "string",
                "city": "string",
                "state": "string",
                "phones": "string",
                "birthday": "2020-05-30"
            }
        ];
		// this.http.get(`${environment.api}/cares/patients/`)
		// 	.subscribe((response: ListResponse<Help>) => this.parseResponse(response));
	}

	private parseResponse(response: ListResponse<Help>) {
        this.data = response.results;
	}

	handleDelete({ data }) {
		if (!data) return;
		const user: Help = data;

		this.http.delete(`${environment.api}/cares/patients/${user.id}`)
			.subscribe(() => this.deleted = true);
	}
	
	handleEdit({ data }) {
		if (!data) return;
		const user: Help = data;

		this.http.put(`${environment.api}/cares/patients/${user.id}/`, user)
			.subscribe(() => this.edited = true);
	}
}

