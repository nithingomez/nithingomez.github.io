import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';

import { HttpErrorInterceptor } from './http-error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HoverPreloadModule } from 'ngx-hover-preload';
// import { QuicklinkModule } from 'ngx-quicklink';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';



import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { BrowserStorageComponent } from './browser-storage/browser-storage.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ChildComponent2Component } from './child-component2/child-component2.component';
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
import { CoreUiModule } from 'projects/core-ui/src/public-api';
import { CommonUiModule } from 'projects/common-ui/src/public-api';



@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    BrowserStorageComponent,
    DatabaseStorageComponent,
    UploadFileComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    ChildComponent2Component,
    NonChildComponentComponent,
    ObservableComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    ObservableOperatorsComponent,
    LoginComponent,
    HomeComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    MainComponent,
    SubComponent
  ],
  imports: [
    CoreUiModule,
    CommonUiModule,


    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    InfiniteScrollModule,
    // QuicklinkModule,
    HoverPreloadModule,

    MatProgressSpinnerModule,
    MatButtonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})




export class AppModule { }
