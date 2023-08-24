import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// CUSTOM IMPORTS
import { SharedModule } from '../shared/shared/shared.module';
import { ServicesRoutingModule } from './services-routing.module';
import { IndexComponent } from './views/index/index.component';
import { ServiceFormComponent } from './components/service-form/service-form.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';


@NgModule({
  declarations: [
    IndexComponent,
    ServiceFormComponent,
    ServiceCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
