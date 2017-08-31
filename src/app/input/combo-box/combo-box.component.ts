import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wj-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.scss'],
  host: {
    '[class.wj-control]': 'true',
    '[class.wj-dropdown]': 'true',
    '[class.wj-content]': 'true'
  }
})
export class ComboBoxComponent implements OnInit {
  items: any[] = [];
  isOpen: boolean = true;
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        title: '0001'
      }
    ]
  }

  open(){
    this.isOpen = true;
  }

}
