import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourthComponent } from './fourth/fourth.component';
import { ThirdComponent } from './third/third.component';


const routes: Routes = [
  { path: 'thirdComp', component: ThirdComponent },
  { path: 'fourthComp', component: FourthComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature2RoutingModule { }
