import { NgModule } from "@angular/core";
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';
import { CreateContractorFormComponent } from './create-contractor-form/create-contractor-form.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbInputModule, NbCardModule, NbButtonModule, NbCheckboxModule, NbSelectModule, NbIconModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

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
	],
	declarations: [
		CreateUserFormComponent,
		CreateContractorFormComponent,
	],
	exports: [
		CreateUserFormComponent,
		CreateContractorFormComponent,
	]
})
export class ComponentsModule { }