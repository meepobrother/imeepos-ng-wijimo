import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBoxModule } from './list-box/list-box.module';

@NgModule({
  imports: [
    CommonModule,
    ListBoxModule
  ],
  declarations: [],
  exports: [
    ListBoxModule
  ]
})
export class InputModule { }
