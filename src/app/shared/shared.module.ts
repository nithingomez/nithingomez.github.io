import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { EllipsisPipe } from './ellipsis.pipe';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    HighlightDirective,
    EllipsisPipe
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    FormsModule,
  ],
  exports: [HighlightDirective, EllipsisPipe, FormsModule, InfiniteScrollModule]
})
export class SharedModule { }
