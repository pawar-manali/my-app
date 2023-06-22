import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appRoundButton]'
})
export class RoundButtonDirective {
 
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.setRoundStyle(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setRoundStyle(false);
  }

  private setRoundStyle(isRound: boolean) {
    if (isRound) {
      this.renderer.setStyle(this.el.nativeElement, 'border-radius', '50%');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'border-radius');
    }

}}


