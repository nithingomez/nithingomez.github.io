import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { EllipsisPipe } from './ellipsis.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreUiModule } from 'projects/core-ui/src/public-api';
import { CommonUiModule } from 'projects/common-ui/src/public-api';
import { GlobalErrorHandlerService } from './global-error-handler.service';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorIntercept } from './error.interceptor';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const routes: Routes = [
  { path: 'error', component: ErrorComponent }
]
@NgModule({
  declarations: [
    HighlightDirective,
    EllipsisPipe
  ],
  imports: [
    InfiniteScrollModule,

    CommonModule,
    CoreUiModule,
    CommonUiModule,

    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorIntercept,
      multi: true
    }
  ],
  exports: [HighlightDirective, EllipsisPipe, FormsModule, ReactiveFormsModule, InfiniteScrollModule, CoreUiModule, CommonUiModule]
})
export class SharedModule { }
