import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBoxComponent } from './list-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListBoxComponent],
  exports: [ListBoxComponent]
})
export class ListBoxModule { }
