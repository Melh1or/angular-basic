import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  constructor(private el: ElementRef, private r: Renderer2) {
    this.r.setStyle(this.el.nativeElement, 'color', 'blue');
  }

  @Input('appStyle') style;
  @Input() fontSize = '25px';
  @Input() dStyle: {border: string};

  @HostBinding('style.color') elColor = null;

  setColor(color: string): void {
    this.r.setStyle(this.el.nativeElement, 'color', color);
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    this.setColor(this.style);
    this.r.setStyle(this.el.nativeElement, 'fontSize', this.fontSize);
  }

  @HostListener('mouseenter') onHover(event: Event) {
    // this.setColor('red');
    this.elColor = 'red';
  }

  @HostListener('mouseleave') onLeave(event: Event) {
    // this.setColor('green');
    this.elColor = 'blue';
  }
}
