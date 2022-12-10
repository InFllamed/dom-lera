import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  @Output() closeEvent = new EventEmitter<void>();

  constructor() {
  }

  close(): void {
    this.closeEvent.emit();
  }

}
