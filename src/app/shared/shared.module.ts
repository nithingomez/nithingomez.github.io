import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { EllipsisPipe } from './ellipsis.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HighlightDirective,
    EllipsisPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [HighlightDirective, EllipsisPipe, FormsModule]
})
export class SharedModule { }
