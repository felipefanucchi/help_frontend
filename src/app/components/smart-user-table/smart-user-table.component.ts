import { Component, OnInit, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';

@Component({
	selector: 'app-smart-user-table',
	templateUrl: 'smart-user-table.component.html'
})

export class SmartUserTableComponent implements OnInit {
	@Input() columns: Array<any>;
	@Input() role: string;
	@Input() data: Array<any>;

  settings: any;

  constructor() {}
	
	ngOnInit(): void {
		this.buildColumns(this.columns);
	}

	ngOnChanges() {
	}

  onDeleteConfirm(event): void {
    if (window.confirm(`Deseja deletar o ${this.role} atual`)) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
	}
	
	private buildColumns(data: Object): void {
		const columns = {
			name: {
				title: 'Nome Completo',
				type: 'string'
			},
			email: {
				title: 'E-mail',
				type: 'string'
			},
			birthdate: {
				title: 'Nascimento',
				type: 'string'
			},
			document_number: {
				title: 'CPF',
				type: 'string'
			},
			postal_code: {
				title: 'CEP',
				type: 'string'
			},
			address: {
				title: 'Endereço',
				type: 'string'
			},
			address_number: {
				title: 'Número',
				type: 'string'
			},
			address_complement: {
				title: 'Complemento',
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
		};

		this.settings = {
			actions: {
				add: false,
				columnTitle: 'Ações'
			},
			edit: {
				editButtonContent: '<i class="nb-edit"></i>',
				saveButtonContent: '<i class="nb-checkmark"></i>',
				cancelButtonContent: '<i class="nb-close"></i>',
			},
			delete: {
				deleteButtonContent: '<i class="nb-trash"></i>',
				confirmDelete: true,
			},
			columns: Object.assign(columns, data)
		};
	}
}