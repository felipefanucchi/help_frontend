import { Component } from "@angular/core";

@Component({
	selector: 'admin-add-customer',
	template: '<app-create-user [custom_fields]="fields"></app-create-user>'
})
export class AddCustomerComponent {
	fields = [];
	
	constructor() {}
}