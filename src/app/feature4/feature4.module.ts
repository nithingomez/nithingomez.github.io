import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeventhComponent } from './seventh/seventh.component';
import { EigthComponent } from './eigth/eigth.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'seventhComp', component: SeventhComponent },
  { path: 'eigthComp', component: EigthComponent }
];

@NgModule({
  declarations: [
    SeventhComponent,
    EigthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Feature4Module { }
