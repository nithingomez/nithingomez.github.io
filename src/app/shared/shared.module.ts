import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { EllipsisPipe } from './ellipsis.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CoreUiModule } from 'projects/core-ui/src/public-api';
import { CommonUiModule } from 'projects/common-ui/src/public-api';



@NgModule({
  declarations: [
    HighlightDirective,
    EllipsisPipe
  ],
  imports: [
    CommonModule,
    CoreUiModule,
    CommonUiModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HighlightDirective, EllipsisPipe, FormsModule, ReactiveFormsModule, InfiniteScrollModule, CoreUiModule, CommonUiModule]
})
export class SharedModule { }
