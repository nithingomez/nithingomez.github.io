import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { HoverPreloadStrategy } from 'ngx-hover-preload';

const routes: Routes = [
  {
    path: 'feature1',
    loadChildren: () => import('./feature1/feature1.module').then(m => m.Feature1Module)
  },
  {
    path: 'feature2',
    loadChildren: () => import('./feature2/feature2.module').then(m => m.Feature2Module),
    // data: {
    //   preload: false
    // }
  },
  {
    path: 'feature3',
    loadChildren: () => import('./feature3/feature3.module').then(m => m.Feature3Module),
    // data: {
    //   preload: false
    // }
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    // QuicklinkModule,
    // RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })],
    RouterModule.forRoot(routes, { preloadingStrategy: HoverPreloadStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
