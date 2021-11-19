import { Component, OnInit } from '@angular/core';
import { Common2Service } from '../shared/common2.service';

@Component({
  selector: 'app-non-child-component',
  templateUrl: './non-child-component.component.html',
  styleUrls: ['./non-child-component.component.scss']
})
export class NonChildComponentComponent implements OnInit {
  counter = 0;
  constructor(private commonService: Common2Service) { }

  ngOnInit() {
  }


  sendDataFromNonChild() {
    this.commonService.sendMessage('Message from Home Component to App Component! ' + this.counter);
    this.counter++;
  }



  // sendMessage(): void {
  //   // send message to subscribers via observable subject
  //   this.commonService.sendMessage('Message from Home Component to App Component!');
  // }

  clearMessages(): void {
    // clear messages
    this.commonService.clearMessages();
  }

}
