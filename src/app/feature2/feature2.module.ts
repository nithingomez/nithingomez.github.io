import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { Feature2RoutingModule } from './feature2-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ThirdComponent,
    FourthComponent
  ],
  imports: [
    CommonModule,
    Feature2RoutingModule,

    SharedModule
  ]
})
export class Feature2Module { }
