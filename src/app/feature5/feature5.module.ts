import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NinthComponent } from './ninth/ninth.component';
import { TenthComponent } from './tenth/tenth.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'ninthComp', component: NinthComponent },
  { path: 'tenthComp', component: TenthComponent }
];

@NgModule({
  declarations: [
    NinthComponent,
    TenthComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class Feature5Module { }
