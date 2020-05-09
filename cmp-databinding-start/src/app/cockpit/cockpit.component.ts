import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  serverElements = [];
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef
  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    //this.newServerName = serverNameInput.value
    this.serverCreated.emit({serverName: serverNameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    //this.newServerName = serverNameInput.value;
    this.blueprintCreated.emit({serverName: serverNameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }
}
