import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from 'src/app/ng-zorro.module';
import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { IndexComponent } from './views/index/index.component';
import { BlogAddComponent } from './views/blog-add/blog-add.component';



@NgModule({
  declarations: [
    IndexComponent,
    BlogAddComponent
  ],
  imports: [
    CommonModule,
    NgZorroModule,
    SharedModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
