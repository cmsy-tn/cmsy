import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqRoutingModule } from './faq-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// CUSTOM VIEWS & COMPONENTS
import { IndexComponent } from './views/index/index.component';
import { FaqCardComponent } from './components/faq-card/faq-card.component';
import { SharedModule } from "../shared/shared/shared.module";



@NgModule({
  declarations: [
    IndexComponent,
    FaqCardComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FaqModule { }
