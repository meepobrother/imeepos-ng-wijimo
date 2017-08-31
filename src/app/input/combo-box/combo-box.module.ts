import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboBoxComponent } from './combo-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComboBoxComponent],
  exports: [ComboBoxComponent]
})
export class ComboBoxModule { }
