import { NgModule } from "@angular/core";
import { NbInputModule, NbButtonModule } from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		NbInputModule,
		NbButtonModule,
		FormsModule,
		ReactiveFormsModule,
		CommonModule
	],
	declarations: [
		LoginComponent
	],
})
export class AuthenticationModule {

}