import { NgModule } from '@angular/core';
import { CustomerRoutingModule } from './customer-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { CommonModule } from '@angular/common';
import { CustomerAddCareComponent } from './add/care/care.component';

@NgModule({
  imports: [
		CustomerRoutingModule,
		ComponentsModule,
		CommonModule
  ],
  declarations: [
		CustomerAddCareComponent
	],
})
export class CustomerModule {
}
