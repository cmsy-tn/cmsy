import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// CUSTOM IMPORTSQ
import { ConcatclassesPipe } from 'src/app/utils/concatclasses.pipe';
import { CopyingComponent } from './copying/copying.component';

@NgModule({
  declarations: [ConcatclassesPipe, CopyingComponent],
  imports: [
    CommonModule
  ],
  exports: [ConcatclassesPipe, CopyingComponent]
})
export class SharedModule { }
