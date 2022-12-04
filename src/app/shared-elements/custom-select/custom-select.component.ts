import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CustomSelectInterface} from "../_interfaces/custom-select.interface";

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent {

  @Input() options: CustomSelectInterface[];
  @Input() placeholder: string;

  @Output() currentValueEvent = new EventEmitter<any>;

  isShowList = false;

  constructor() {
  }

  setOption(option: CustomSelectInterface): void {
    console.log(option);
    this.currentValueEvent.emit(option);
  }

}
