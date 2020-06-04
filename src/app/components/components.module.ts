import { NgModule } from "@angular/core";
import { ThemeModule } from '../@theme/theme.module';
import { NbInputModule, NbCardModule, NbButtonModule, NbCheckboxModule, NbSelectModule, NbIconModule, NbRadioModule, NbAlertModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Components
import { CreateFormComponent } from './create-form/create-form.component';
import { SmartListingTableComponent } from './smart-listing-table/smart-listing-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxMaskModule } from 'ngx-mask';
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
		NgxMaskModule.forChild()
	],
	declarations: [
		CreateFormComponent,
		SmartListingTableComponent,
	],
	exports: [
		CreateFormComponent,
		SmartListingTableComponent,
	]
})
export class ComponentsModule { }