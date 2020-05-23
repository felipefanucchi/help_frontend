import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NbToastrService, NbIconConfig } from '@nebular/theme';

@Component({
	selector: 'app-create-user',
	templateUrl: './create-user-form.component.html',
	styleUrls: ['./create-user-form.component.scss']
})
export class CreateUserFormComponent implements OnInit {
	@Input('custom_fields') customFields: [];
	@Input() role: string;
	@Output('event_submitted') submitted: EventEmitter<any> = new EventEmitter<any>();
	formGroup: FormGroup;
	wasSubmitted: boolean

	constructor(
		private formBuilder: FormBuilder,
		private toastrService: NbToastrService
	) {
		this.formGroup = this.formBuilder.group({
			name: [null, [Validators.required]],
			email: [null, [Validators.required, Validators.email]],
			document_number: [null, [Validators.required]],
			birthdate: [null, [Validators.required]],
			address: [null, [Validators.required]],
			address_number: [null, [Validators.required]],
			address_complement: [null],
			postal_code: [null, [Validators.required]],
			neighborhood: [null, [Validators.required]],
			city: [null, [Validators.required]],
			state: [null, [Validators.required]]
		});
	}

	ngOnInit(): void {
		this.customFields.forEach((field: any) => {
			this.formGroup.addControl(
				field.name, 
				new FormControl(null, Validators.required)
			);
		});
	}

	private handleSubmit($event): void {
		$event.preventDefault();
		this.wasSubmitted = true;

		if(this.formGroup.invalid) {
			this.showToast('top-right', 'danger');
			return;
		}

		const formData = this.formGroup.getRawValue();
		const birthdate = this.handleBirth(formData.birthdate);

		Object.assign(formData, { birthdate });

		this.submitted.emit(formData);
	}

	handleBirth(date) {
		return date.split('/').reverse().join('-');
	}

	showToast(position, status) {
		const iconConfig = {
			icon: 'alert-circle-outline',
			pack: 'eva',
			position,
			status
		};
		
    this.toastrService.show('valide os campos do formulário', 'Erro', iconConfig);
  }
}