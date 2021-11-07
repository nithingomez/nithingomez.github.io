import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { Feature1RoutingModule } from './feature1-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RxjsTestComponent } from './rxjs-test/rxjs-test.component';
import { MemoizationTestComponent } from './memoization-test/memoization-test.component';
import { TsTypingTestComponent } from './ts-typing-test/ts-typing-test.component';




@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    ParentComponent,
    ChildComponent,
    RxjsTestComponent,
    MemoizationTestComponent,
    TsTypingTestComponent
  ],
  imports: [
    CommonModule,
    Feature1RoutingModule,

    SharedModule
  ]
})
export class Feature1Module { }
