import {
  Component,
  ViewEncapsulation,
  Input,
  forwardRef
} from '@angular/core';
import { isPrimitive } from '../../util';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'wj-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.scss'],
  host: {
    '[class.wj-control]': 'true',
    '[class.wj-listbox]': 'true',
    '[class.wj-content]': 'true',
    '[class.wj-state-focused]': 'true',
  },
  encapsulation: ViewEncapsulation.None,
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=>ListBoxComponent),
    multi:true
  }]
})
export class ListBoxComponent implements ControlValueAccessor {

  @Input() items: any[] = [];
  // 显示对象的属性
  @Input() displayMemberPath: string = 'title';
  // 是否多选
  _multi: boolean = false;
  @Input()
  set multi(val: any){
    if(isPrimitive(val)){
      this._multi = true;
    }
  }

  _checkbox: boolean = false;
  @Input()
  set checkbox(val: any){
    if(isPrimitive(val)){
      this._checkbox = true;
    }
  }

  onItem(event: Event,item: any,index: number){
    event.preventDefault();
    if(!this._multi){
      this.items.map(res=>{
        res.active = false;
      })
    }
    item.active = !item.active;
    this.onChange();
  }

  onModelChange: Function = () => {};
  writeValue(val: any) : void {
    if(val != undefined){
      this.items = val;
    }
  }
  registerOnChange(fn: Function): void {
      this.onModelChange = fn;
  }
  registerOnTouched(fn: Function): void {}
  onChange(){
    this.onModelChange(this.items);
  }
}
