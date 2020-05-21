import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { AddProfessionalComponent } from './add/professional/professional.component';

@NgModule({
  imports: [
		AdminRoutingModule,
		ComponentsModule,
  ],
  declarations: [
		AddProfessionalComponent
	],
})
export class AdminModule {
}
