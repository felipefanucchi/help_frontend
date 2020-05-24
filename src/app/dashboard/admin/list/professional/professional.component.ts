import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'admin-smart-table-professional',
	template: `
		<app-smart-user-table
			[columns]="columns"
			role="Profissional"
		></app-smart-user-table>
	`
})

export class ListProfessionalComponent implements OnInit {
	columns = {};

	constructor() { }

	ngOnInit() { }
}