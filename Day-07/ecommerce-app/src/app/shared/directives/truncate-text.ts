import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appTruncateText]'
})
export class TruncateTextDirective implements AfterViewInit {
  @Input() appTruncateText: number = 50;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const text = this.el.nativeElement.innerText;
    if (text.length > this.appTruncateText) {
      this.el.nativeElement.innerText = text.substring(0, this.appTruncateText) + '...';
    }
  }
}
