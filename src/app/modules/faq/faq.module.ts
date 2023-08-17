import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqRoutingModule } from './faq-routing.module';

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
    SharedModule
  ]
})
export class FaqModule { }
