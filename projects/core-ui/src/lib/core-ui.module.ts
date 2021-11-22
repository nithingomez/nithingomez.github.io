import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreUiComponent } from './core-ui.component';
import { CoreTextfieldComponent } from './core-textfield/core-textfield.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CoreUiComponent,
    CoreTextfieldComponent,
  ],
  imports: [
    FormsModule,
    CommonModule

  ],
  exports: [
    CoreUiComponent,
    CoreTextfieldComponent
  ]
})
export class CoreUiModule { }
