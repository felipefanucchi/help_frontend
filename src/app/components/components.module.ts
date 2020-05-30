import { NgModule } from "@angular/core";
import { ThemeModule } from '../@theme/theme.module';
import { NbInputModule, NbCardModule, NbButtonModule, NbCheckboxModule, NbSelectModule, NbIconModule, NbRadioModule, NbAlertModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Components
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';
import { SmartListingTableComponent } from './smart-listing-table/smart-listing-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
	imports: [
		ThemeModule,
		NbInputModule,
		NbCardModule,
		NbButtonModule,
		NbCheckboxModule,
		NbSelectModule,
		NbIconModule,
		FormsModule,
		ReactiveFormsModule,
		NbRadioModule,
		Ng2SmartTableModule,
	],
	declarations: [
		CreateUserFormComponent,
		SmartListingTableComponent,
	],
	exports: [
		CreateUserFormComponent,
		SmartListingTableComponent,
	]
})
export class ComponentsModule { }