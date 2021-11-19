import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NinthComponent } from './ninth/ninth.component';
import { TenthComponent } from './tenth/tenth.component';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class Feature5Module { }
