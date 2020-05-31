import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from "@angular/core";
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl, FormArray } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { resolve } from 'dns';

@Component({
	selector: 'app-create',
	templateUrl: './create-form.component.html',
	styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit, OnChanges {
	@Input('custom_fields') customFields: [];
	@Input('hide_fields') fieldsToHide: [];
	@Input('finished') finished: boolean;
	@Input() name: string;
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
		(async () => {
			await this.buildCustomFields();
			this.removeFields();
		})();
	}

	ngOnChanges(change): void {
		if (!this.finished) return;
		this.formGroup.reset();
		this.wasSubmitted = false;
	}

	handleSubmit($event): void {
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
	
	private removeFields(): void {
		if (!this.fieldsToHide?.length) return;

		for(const field in this.formGroup.controls) {
			this.fieldsToHide.forEach((fieldToHide: string) => {
				if (fieldToHide === field) {
					this.formGroup.removeControl(field);
				}
			})
		}
	}
	
	private buildCustomFields(): Promise<boolean> {
		if (!this.customFields?.length) return;

		return new Promise(resolve => {
			this.customFields.forEach((field: any, index: number) => {
				this.formGroup.addControl(
					field.name, 
					new FormControl(null, Validators.required)
				);
	
				if (this.customFields.length - 1 === index) {
					resolve(true);
				}
			});
		});
	}
}