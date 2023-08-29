import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqRoutingModule } from './faq-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/app/ng-zorro.module';
// CUSTOM VIEWS & COMPONENTS
import { IndexComponent } from './views/index/index.component';
import { FaqCardComponent } from './components/faq-card/faq-card.component';
import { SharedModule } from "../shared/shared.module";
import { FaqDataComponent } from './components/faq-data/faq-data.component';
import { FaqFormComponent } from './components/faq-form/faq-form.component';



@NgModule({
  declarations: [
    IndexComponent,
    FaqCardComponent,
    FaqDataComponent,
    FaqFormComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroModule
  ]
})
export class FaqModule { }
