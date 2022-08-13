import { Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-dom-manipulator',
  templateUrl: './dom-manipulator.component.html',
  styleUrls: ['./dom-manipulator.component.css']
})
export class DOMManipulatorComponent implements AfterViewInit {
  constructor() { }

  input: string | any = null;
  @ViewChild('divTagTop', {static: false}) divTagTop: ElementRef | any = null;
  @ViewChild('inputTagTop', {static: false, read: ElementRef}) inputTagTop: any = null;

  ngAfterViewInit() {
    this.divTagTop.nativeElement.innerHTML = "this line is made possible by using element ref in the component file";
    this.divTagTop.nativeElement.style.backgroundColor = "red";
    this.inputTagTop.nativeElement.style.backgroundColor = "green";
  }

}
