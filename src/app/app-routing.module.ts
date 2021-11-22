import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { HoverPreloadStrategy } from 'ngx-hover-preload';
import { CustomResolveGuard } from './custom-resolve.guard';
import { AuthGuardService } from './authguard.service';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { BrowserStorageComponent } from './browser-storage/browser-storage.component';
import { DatabaseStorageComponent } from './database-storage/database-storage.component';
import { ReactiveFormComponent } from './forms/reactive-forms/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './forms/template-driven-forms/template-driven-form/template-driven-form.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main-component/main/main.component';
import { NonChildComponentComponent } from './non-child-component/non-child-component.component';
import { ObservableOperatorsComponent } from './observable-operators/observable-operators.component';
import { ObservableComponent } from './observable/observable.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { SubComponent } from './sub-component/sub/sub.component';
import { SubjectComponent } from './subject/subject.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

const routes: Routes = [
  {
    path: 'feature1',
    loadChildren: () => import('./feature1/feature1.module').then(m => m.Feature1Module),
    canActivate: [AuthGuardService]
  },
  {
    path: 'feature2',
    loadChildren: () => import('./feature2/feature2.module').then(m => m.Feature2Module),
    canActivate: [AuthGuardService]
    // data: {
    //   preload: false
    // }
  },
  {
    path: 'feature3',
    loadChildren: () => import('./feature3/feature3.module').then(m => m.Feature3Module),
    resolve: {
      postData: CustomResolveGuard
    },
    canActivate: [AuthGuardService]
  },
  {
    path: 'feature4',
    loadChildren: () => import('./feature4/feature4.module').then(m => m.Feature4Module),
    // canActivate: [AuthGuardService]
  },
  {
    path: 'feature5',
    loadChildren: () => import('./feature5/feature5.module').then(m => m.Feature5Module),
    canActivate: [AuthGuardService]
    // canActivate: [CustomResolveGuard]
  },
  {
    path: 'feature6',
    loadChildren: () => import('./feature6/feature6.module').then(m => m.Feature6Module),
    canActivate: [AuthGuardService]

  },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'browserstorage', component: BrowserStorageComponent, canActivate: [AuthGuardService] },
  { path: 'dbstorage', component: DatabaseStorageComponent, canActivate: [AuthGuardService] },
  { path: 'uploadfile', component: UploadFileComponent, canActivate: [AuthGuardService] },
  { path: 'parentComponent', component: ParentComponentComponent, canActivate: [AuthGuardService] },
  { path: 'observable', component: ObservableComponent, canActivate: [AuthGuardService] },
  { path: 'observable-operators', component: ObservableOperatorsComponent, canActivate: [AuthGuardService] },
  { path: 'subject', component: SubjectComponent, canActivate: [AuthGuardService] },
  { path: 'behavior-subject', component: BehaviorSubjectComponent, canActivate: [AuthGuardService] },
  { path: 'replay-subject', component: ReplaySubjectComponent, canActivate: [AuthGuardService] },
  { path: 'nonChildComponent', component: NonChildComponentComponent, canActivate: [AuthGuardService] },
  { path: 'reactive-forms', component: ReactiveFormComponent, canActivate: [AuthGuardService] },
  { path: 'template-driven-forms', component: TemplateDrivenFormComponent, canActivate: [AuthGuardService] },
  { path: 'main', component: MainComponent, canActivate: [AuthGuardService] },
  { path: 'sub', component: SubComponent, canActivate: [AuthGuardService] }
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [
    // QuicklinkModule,
    // RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })],
    RouterModule.forRoot(routes, { preloadingStrategy: HoverPreloadStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
