import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'fifthComp', component: FifthComponent },
  { path: 'sixthComp', component: SixthComponent }
];

@NgModule({
  declarations: [
    FifthComponent,
    SixthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class Feature3Module { }
