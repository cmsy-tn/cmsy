import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// CUSTOM IMPORTS
import { IndexComponent } from './views/index/index.component';
import { BlogAddComponent } from './views/blog-add/blog-add.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: ':id', component: BlogAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
