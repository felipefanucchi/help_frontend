import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: 'app-create-contractor',
	templateUrl: './create-contractor-form.component.html',
	styleUrls: ['./create-contractor-form.component.scss']
})
export class CreateContractorFormComponent implements OnInit {
	@Input('custom_fields') customFields: string;
	
	constructor() { }

	ngOnInit(): void {

	}
}