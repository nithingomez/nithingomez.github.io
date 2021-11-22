import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ninth',
  templateUrl: './ninth.component.html',
  styleUrls: ['./ninth.component.scss']
})
export class NinthComponent implements OnInit {

  isReq = true;
  isDis = true;
  value = 'nithin';
  placeholder = 'Enter Name Here';
  constructor() { }

  ngOnInit(): void {
  }

}
