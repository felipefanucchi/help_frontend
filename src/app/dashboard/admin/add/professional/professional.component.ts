import { Component } from "@angular/core";

@Component({
	selector: 'admin-add-professional',
	template: '<app-create-user [custom_fields]="fields"></app-create-user>>'
})
export class AddProfessionalComponent {
	fields = [];
	
	constructor() {}
}