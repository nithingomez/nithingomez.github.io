import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeventhComponent } from './seventh/seventh.component';
import { EigthComponent } from './eigth/eigth.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { gteValidatorDirective } from './seventh/gte.validator';

const routes: Routes = [
  { path: 'seventhComp', component: SeventhComponent },
  { path: 'eigthComp', component: EigthComponent }
];

@NgModule({
  declarations: [
    SeventhComponent,
    EigthComponent,
    gteValidatorDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class Feature4Module { }
