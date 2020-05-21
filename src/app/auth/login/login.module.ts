import { NgModule } from "@angular/core";
import { NbInputModule, NbButtonModule } from '@nebular/theme';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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
	exports: [
		LoginComponent
	]
})
export class LoginModule {

}