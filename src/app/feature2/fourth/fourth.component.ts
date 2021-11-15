import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent implements OnInit {

  constructor() { }
  title = 'Chained Array Operators';
  meetups = [
    { name: 'JavaScript', isActive: true, members: 700 },
    { name: 'Angular', isActive: true, members: 900 },
    { name: 'Node', isActive: false, members: 600 },
    { name: 'React', isActive: true, members: 500 }
  ];
  ngOnInit(): void {

  }

  processMeetups() {
    let sumFPChain = this.meetups.filter((m) => {
      return m.isActive;
    })
      .map((m) => {
        return m.members - (0.1 * m.members);
      })
      .reduce((acc, m) => {
        return acc + m;
      }, 0);
    alert('Final Result ' + sumFPChain);
    return sumFPChain;
  }




}
