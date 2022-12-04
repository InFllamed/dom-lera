import {Directive, ElementRef, EventEmitter, Input, Output, Renderer2} from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  private _isActiveClickOutside: boolean;

  private handleClick;

  @Input('isActiveClickOutside')
  set isActiveClickOutside(isActiveClickOutside: boolean) {
    this._isActiveClickOutside = isActiveClickOutside;

    if (isActiveClickOutside) {
      this.handleClick = this.renderer.listen(document, 'click', event => {
        if (!this.isActiveClickOutside) {
          return;
        }

        if (!this.el.nativeElement.contains(event.target)) {
          this.clickOutside.emit();
        }
      });
    } else {
      this.handleClick = () => {
      };
    }
  }

  get isActiveClickOutside(): boolean {
    return this._isActiveClickOutside;
  }

  @Output() clickOutside: EventEmitter<void> = new EventEmitter<void>();

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

}
