import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { EllipsisPipe } from './ellipsis.pipe';



@NgModule({
  declarations: [
    HighlightDirective,
    EllipsisPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirective, EllipsisPipe]
})
export class SharedModule { }
