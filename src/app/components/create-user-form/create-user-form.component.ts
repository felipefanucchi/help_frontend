import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: 'app-create-user',
	templateUrl: './create-user-form.component.html',
	styleUrls: ['./create-user-form.component.scss']
})
export class CreateUserFormComponent implements OnInit {
	@Input('custom_fields') customFields: string;
	
	constructor() { }

	ngOnInit(): void {

	}
}