import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EleventhComponent } from './eleventh/eleventh.component';
import { TwelthComponent } from './twelth/twelth.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'eleventhComp', component: EleventhComponent },
  { path: 'twelthComp', component: TwelthComponent }
];


@NgModule({
  declarations: [
    EleventhComponent,
    TwelthComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class Feature6Module { }
