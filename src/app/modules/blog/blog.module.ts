import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/app/ng-zorro.module';
import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
// TINYMCE Editor
import { AngularEditorModule } from '@kolkov/angular-editor';

// CUSTOM IMPORTS
import { IndexComponent } from './views/index/index.component';
import { BlogAddComponent } from './views/blog-add/blog-add.component';
import { BlogDataComponent } from './components/blog-data/blog-data.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';


@NgModule({
  declarations: [
    IndexComponent,
    BlogAddComponent,
    BlogDataComponent,
    BlogCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroModule,
    SharedModule,
    BlogRoutingModule,
    AngularEditorModule
  ]
})
export class BlogModule { }
