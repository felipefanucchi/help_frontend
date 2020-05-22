import { NgModule } from "@angular/core";
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbInputModule, NbCardModule, NbButtonModule, NbCheckboxModule, NbSelectModule, NbIconModule, NbRadioModule } from '@nebular/theme';
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