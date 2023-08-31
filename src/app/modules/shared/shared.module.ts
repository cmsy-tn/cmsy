import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroModule } from 'src/app/ng-zorro.module';
// CUSTOM IMPORTSQ
import { ConcatclassesPipe } from 'src/app/utils/concatclasses.pipe';
import { CopyingComponent } from './copying/copying.component';
import { ModuleHeaderComponent } from './module-header/module-header.component';

@NgModule({
  declarations: [
    ConcatclassesPipe,
    CopyingComponent,
    ModuleHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroModule
  ],
  exports: [
    ConcatclassesPipe,
    CopyingComponent,
    ModuleHeaderComponent
  ]
})
export class SharedModule { }
