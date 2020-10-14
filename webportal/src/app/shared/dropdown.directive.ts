import { Directive, ElementRef, Renderer2, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen = false;

  ngOnInit() {
  }

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {

  }

  @HostListener('click') mouseclick(event: Event) {
    console.log("I am able to handle click event");
    this.isOpen = !this.isOpen;
  }

}
