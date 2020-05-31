import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NbToastrConfig, NbToastrService } from '@nebular/theme';

@Component({
	selector: 'app-smart-listing-table',
	templateUrl: 'smart-listing-table.component.html'
})

export class SmartListingTableComponent implements OnInit, OnChanges {
	@Input() columns: Array<any>;
	@Input('name') objectName: string;
	@Input() data: Array<any>;
	@Input() deleted: boolean;
	@Input() edited: boolean;

	@Output() delete: EventEmitter<any> = new EventEmitter<any>();
	@Output() edit: EventEmitter<any> = new EventEmitter<any>();

	settings: any;

	constructor(private toastrService: NbToastrService) { }

	ngOnInit(): void {
		this.buildColumns(this.columns);
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.deleted?.currentValue) {
			this.showToastr(
				this.objectName + ' deletado(a) com sucesso',
				'top-right',
				'warning'
			);
		}
		if (changes.edited?.currentValue) {
			this.showToastr(
				this.objectName + ' editado(a) com sucesso',
				'top-right',
				'success'
			);
		}
	}

	async onDeleteConfirm(event) {
		const response = await this.handleDeleteEvent(event);
		if (!response) return

		this.delete.emit(event)
	}

	async onEditConfirm(event) {
		const response = await this.handleEditEvent(event);
		if (!response) return

		this.edit.emit(event)
	}

	private async handleDeleteEvent(event) {
		return new Promise(async (resolve, reject) => {
			if (
				event?.confirm
				&& window.confirm(
					`Deseja deletar o(a) ${this.objectName.toLowerCase()} atual?`
				)
			) {
				await event.confirm.resolve();
				resolve(true);
			} else {
				await event.confirm.reject();
				reject(false);
			}
		})
	}

	private async handleEditEvent(event) {
		return new Promise(async (resolve, reject) => {
			if (
				event?.confirm
				&& window.confirm(
					`Deseja editar o(a) ${this.objectName.toLowerCase()} atual?`
				)
			) {
				await event.confirm.resolve();
				resolve(true);
			} else {
				await event.confirm.reject();
				reject(false);
			}
		})
	}

	private buildColumns(data: Object): void {
		const columns = {
			id: {
				title: 'ID',
				type: 'number',
				editable: false,
			},
			name: {
				title: 'Nome Completo',
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
				columnTitle: 'Ações',
			},
			edit: {
				editButtonContent: '<i class="nb-edit"></i>',
				saveButtonContent: '<i class="nb-checkmark"></i>',
				cancelButtonContent: '<i class="nb-close"></i>',
				confirmSave: true,
			},
			delete: {
				deleteButtonContent: '<i class="nb-trash"></i>',
				confirmDelete: true,
			},
			columns: Object.assign(columns, data)
		};
	}

	private showToastr(message: string, position: string, status: string) {
		const iconConfig = {
			position,
			status
		};

		this.toastrService.show(null, message, iconConfig as NbToastrConfig);
	}
}