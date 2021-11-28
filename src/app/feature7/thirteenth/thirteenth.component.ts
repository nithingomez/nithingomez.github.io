import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-thirteenth',
  templateUrl: './thirteenth.component.html',
  styleUrls: ['./thirteenth.component.scss']
})
export class ThirteenthComponent implements OnInit {

  constructor(private vref: ViewContainerRef) { }
  @ViewChild('sayHelloTemplate', { read: TemplateRef }) sayHelloTemplate: TemplateRef<any>;
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.vref.createEmbeddedView(this.sayHelloTemplate);
  }

}
