import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssDemoComponent } from './css-demo/css-demo.component';
import { ThirteenthComponent } from './thirteenth/thirteenth.component';
import { FourteenthComponent } from './fourteenth/fourteenth.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  { path: 'thirteenthComp', component: ThirteenthComponent },
  { path: 'fourteenthComp', component: FourteenthComponent }
];
@NgModule({
  declarations: [
    CssDemoComponent,
    ThirteenthComponent,
    FourteenthComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class Feature7Module { }
