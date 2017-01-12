import { Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[myDropDown]'
})
export class MyDropdownDirective {

@HostBinding('class.open') get opened() {
  return this.isOpen;
}

@HostListener('mouseenter') open() {
  this.isOpen = true;
}

@HostListener('mouseleave') close() {
  this.isOpen = false;
}
private isOpen = false;
}