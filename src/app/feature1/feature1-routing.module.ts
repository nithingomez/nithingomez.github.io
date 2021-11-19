import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FirstComponent } from './first/first.component';
import { ParentComponent } from './parent/parent.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: 'firstComp', component: FirstComponent },
  { path: 'secondComp', component: SecondComponent },
  {
    path: 'parentComp', component: ParentComponent, children: [
      { path: 'childComp', component: ChildComponent }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature1RoutingModule { }
