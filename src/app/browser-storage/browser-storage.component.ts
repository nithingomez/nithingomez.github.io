import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser-storage',
  templateUrl: './browser-storage.component.html',
  styleUrls: ['./browser-storage.component.scss']
})
export class BrowserStorageComponent implements OnInit {
  name: any;
  empNo: any;
  age: any;
  addMode = true;
  itemsFromStorage: any = [];
  items: {
    empNo: number,
    name: string,
    age: number,
  }[] = [];

  constructor() { }

  ngOnInit() {
    this.refreshItemsFromStorage();
  }

  refreshItemsFromStorage() {
    this.itemsFromStorage = JSON.parse(localStorage.getItem('list'));
  }



  onSubmit() {
    if (this.addMode) {
      if (this.name && this.age && this.empNo) {

        if (this.items.some(item => item.empNo === this.empNo)) {
          alert('Employee with same employee number already exist');
          return
        }
        const body = { empNo: this.empNo, name: this.name, age: this.age };
        const currentList: any = localStorage.getItem('list') ?? [];
        const currentListArray = currentList.length ? JSON.parse(currentList) : [];
        currentListArray.push(body);
        localStorage.setItem('list', JSON.stringify(currentListArray));
        this.refreshItemsFromStorage();
        this.name = null;
        this.age = null;
        this.empNo = null;
        alert('Record added succesfully');
      } else {
        alert('Please enter name, age and empNo');
      }
    } else {
      this.items = this.items.filter(data => data.empNo = this.empNo);
      this.items[0].name = this.name;
      this.items[0].age = this.age;
      this.name = null;
      this.age = null;
      this.empNo = null;
      this.addMode = true;
      alert('Record updated succesfully');
    }
  }

  onEdit(item) {
    this.addMode = false;
    this.empNo = item.empNo;
    this.age = item.age;
    this.name = item.name;
  }

  onDelete(item) {
    this.items = this.items.filter(data => data.empNo !== item.empNo);
  }

  onCancel() {
    this.name = null;
    this.age = null;
    this.empNo = null;
    this.addMode = true;
  }

}
