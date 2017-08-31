import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBoxModule } from './list-box/list-box.module';
import {ComboBoxModule} from "./combo-box/combo-box.module";

@NgModule({
  imports: [
    CommonModule,
    ListBoxModule,
    ComboBoxModule
  ],
  declarations: [],
  exports: [
    ListBoxModule,
    ComboBoxModule
  ]
})
export class InputModule { }
