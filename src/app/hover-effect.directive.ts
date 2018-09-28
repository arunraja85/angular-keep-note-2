import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    //this.renderer.setStyle(this.element.nativeElement,'background-color','cadetblue');
  }

  @HostBinding('style.background-color') bgColor : string;
  @HostBinding('style.box-shadow') boxShadow : string;
  @HostListener('mouseenter') onmouseenter() {
    this.renderer.setStyle(this.element.nativeElement,'background-color','cadetblue');
  }

  @HostListener('mouseleave') onmouseleave() {
    //this.renderer.removeStyle(this.element.nativeElement,'background-color');
    this.bgColor="red";
    this.boxShadow = "5px 5px 5px grey";
  }



}
