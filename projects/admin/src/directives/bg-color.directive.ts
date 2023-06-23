import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective {
  // textColor: string | undefined;

  constructor(private element: ElementRef) {
    console.log('element', this.element);
  }
@HostBinding('style.backgroundColor') backgroundColor: string = ''
  @HostListener('mouseenter')
  onMouseEnter() {
    // this.changeBgColor('#000');
    this.backgroundColor = '#000';
    // this.textColor = '#fff'
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    // this.changeBgColor('');
    this.backgroundColor = '';

  }
  // changeBgColor(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }
}
