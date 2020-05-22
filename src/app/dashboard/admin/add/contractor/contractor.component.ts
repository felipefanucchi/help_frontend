import { Component } from "@angular/core";

@Component({
	selector: 'admin-add-contractor',
	template: '<app-create-contractor [custom_fields]="fields"></app-create-contractor>'
})
export class AddContractorComponent {
	fields = [];
	
	constructor() {}
}