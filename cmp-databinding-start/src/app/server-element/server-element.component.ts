import { Component, OnInit, Input, ViewEncapsulation, OnChanges, DoCheck, AfterContentInit, OnDestroy, AfterViewInit, ElementRef, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading', {static: true}) headingElement: ElementRef;
  @ContentChild('contentParagraph', {static: true}) contentParaElement: ElementRef;

  constructor() {
    console.log("constructor called")
  }

  ngOnInit() {
    console.log("ngOnInit called");
    //headingElement wont be visible as it is not yet rendered
    console.log("headingElement: " + this.headingElement.nativeElement.textContent);
    console.log("cotentParaElement:" + this.contentParaElement.nativeElement.textContent);
  }

  ngOnChanges() {
    console.log("ngOnChanges called")
  }

  ngDoCheck() {
    console.log("ngDoCheck called")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called")
    console.log("cotentParaElement:" + this.contentParaElement.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
    console.log("headingElement: " + this.headingElement.nativeElement.textContent)
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called")
  }
}
