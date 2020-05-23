import { NgModule } from "@angular/core";
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbInputModule, NbCardModule, NbButtonModule, NbCheckboxModule, NbSelectModule, NbIconModule, NbRadioModule, NbAlertModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
		NbRadioModule
	],
	declarations: [
		CreateUserFormComponent,
	],
	exports: [
		CreateUserFormComponent,
	]
})
export class ComponentsModule { }