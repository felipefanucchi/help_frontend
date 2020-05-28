import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NbToastrConfig, NbToastrService } from '@nebular/theme';

@Component({
	selector: 'app-smart-user-table',
	templateUrl: 'smart-user-table.component.html'
})

export class SmartUserTableComponent implements OnInit, OnChanges {
	@Input() columns: Array<any>;
	@Input() role: string;
	@Input() data: Array<any>;
	@Input() deleted: boolean;
	@Input() edited: boolean;

	@Output() delete: EventEmitter<any> = new EventEmitter<any>();
	@Output() edit: EventEmitter<any> = new EventEmitter<any>();

  settings: any;

  constructor(private toastrService: NbToastrService) {}
	
	ngOnInit(): void {
		this.buildColumns(this.columns);
	}

	ngOnChanges(changes: SimpleChanges): void {
		if(changes.deleted?.currentValue) {
			this.showToastr('Usuário deletado com sucesso', 'top-right', 'warning');
		}
		if(changes.edited?.currentValue) {
			this.showToastr('Usuário editado com sucesso', 'top-right', 'success');
		}
	}
	
  async onDeleteConfirm(event) {
		const userResponse = await this.handleDeleteEvent(event);
		if (!userResponse) return

		this.delete.emit(event)
	}

	async onEditConfirm(event) {
		const userResponse = await this.handleEditEvent(event);
		if (!userResponse) return

		this.edit.emit(event)
	}

	private async handleDeleteEvent(event) {
		return new Promise(async (resolve, reject) => {
			if (event?.confirm && window.confirm(`Deseja deletar o ${this.role} atual`)) {
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
			if (event?.confirm && window.confirm(`Deseja editar o ${this.role} atual`)) {
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
				type: 'number'
			},
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