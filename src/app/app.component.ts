import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  form: FormGroup;
  constructor(
    public fb: FormBuilder
  ){
    this.form = this.fb.group({
      listSignBoxs: [[]],
      listMultiBoxs: [[]],
      listMultiCheckboxBoxs: [[]],
      listSignCheckboxBoxs: [[]],
    });
  }

  ngOnInit(){
    this.form.get('listSignBoxs').setValue([
      {title: 'test1',active: true},{title: 'test2',active: false}
    ]);
    this.form.get('listMultiBoxs').setValue([
      {title: 'test1',active: true},{title: 'test2',active: false}
    ]);
    this.form.get('listMultiCheckboxBoxs').setValue([
      {title: 'test1',active: true},{title: 'test2',active: false}
    ]);
    this.form.get('listSignCheckboxBoxs').setValue([
      {title: 'test1',active: true},{title: 'test2',active: false}
    ]);
  }

  onBtn(){
    console.log(this.form.value)
  }
}
