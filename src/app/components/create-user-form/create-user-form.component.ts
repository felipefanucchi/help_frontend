import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-create-user',
	templateUrl: './create-user-form.component.html',
	styleUrls: ['./create-user-form.component.scss']
})
export class CreateUserFormComponent implements OnInit {
	@Input('custom_fields') customFields: string;
	@Input() role: string;
	@Output('event_submitted') submitted: EventEmitter<any> = new EventEmitter<any>();
	formGroup: FormGroup;

	constructor(
		private formBuilder: FormBuilder
	) {
		this.formGroup = this.formBuilder.group({
			name: [null, [Validators.required]],
			email: [null, [Validators.required]],
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

	}

	private handleSubmit($event): void {
		$event.preventDefault();

		const formData = this.formGroup.getRawValue();

		console.log(`Form ${this.role} submitted.`);
		console.log(`Form ${this.role} data: `, formData);

		this.submitted.emit(formData);
	}	
}