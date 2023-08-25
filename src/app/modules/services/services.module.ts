import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// CUSTOM IMPORTS
import { SharedModule } from '../shared/shared/shared.module';
import { ServicesRoutingModule } from './services-routing.module';
import { IndexComponent } from './views/index/index.component';
import { ServiceFormComponent } from './components/service-form/service-form.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { ServiceDataComponent } from './components/service-data/service-data.component';


@NgModule({
  declarations: [
    IndexComponent,
    ServiceFormComponent,
    ServiceCardComponent,
    ServiceDataComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
