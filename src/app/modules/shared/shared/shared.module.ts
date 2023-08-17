import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// CUSTOM IMPORTSQ
import { ConcatclassesPipe } from 'src/app/utils/concatclasses.pipe';

@NgModule({
  declarations: [ConcatclassesPipe],
  imports: [
    CommonModule
  ],
  exports: [ConcatclassesPipe]
})
export class SharedModule { }
