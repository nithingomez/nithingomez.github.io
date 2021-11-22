import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'core-textfield',
  templateUrl: './core-textfield.component.html',
  styleUrls: ['./core-textfield.component.css']
})
export class CoreTextfieldComponent {

  @Input() public _placeholder = '';
  public get placeholder() {
    if (!this.disabled) { return this._placeholder; }
    return '';
  }
  @Input() public set placeholder(_placholder) {
    this._placeholder = _placholder;
  }
  @Input() public class: string;
  @Input() public required: boolean;
  @Input() public disabled: boolean;
  @Input() public maxlength = 400;
  @Input() public minlength: number;
  @Input() public pattern: string;


  @Input() public style: any;
  @Output() keyup = new EventEmitter();

  @Input() public onfocus: boolean;
  @Input() public coreJsonValidator;
  clicked: boolean = false;

  value = '';
  constructor() { }

  onKeyUp($event) {
    this.keyup.emit($event);
  }

  runFocus() {
    this.onfocus = true;
  }


}
