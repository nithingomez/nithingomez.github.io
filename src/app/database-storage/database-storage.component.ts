import { Component, OnInit } from '@angular/core';
import { StorageService } from '../shared/storage.service';

@Component({
  selector: 'app-database-storage',
  templateUrl: './database-storage.component.html',
  styleUrls: ['./database-storage.component.scss']
})
export class DatabaseStorageComponent implements OnInit {
  name: any;
  empNo: any;
  age: any;
  addMode = true;
  items = [];

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.getEmployeeData();
  }

  getEmployeeData() {
    this.storageService.getEmployeeData().subscribe(data => {
      this.items = data;
    })
  }

  saveEmployeeData(empDetails) {
    this.storageService.saveEmployeeData(empDetails).subscribe(data => {
      console.log('response ' + data);
      this.name = null;
      this.age = null;
      this.empNo = null;
      alert('Record added succesfully');
      this.getEmployeeData();
    })
  }


  updateEmployeeData(empDetails, empNo) {
    this.storageService.updateEmployeeData(empDetails, empNo).subscribe(data => {
      console.log('response ' + data);
      this.name = null;
      this.age = null;
      this.empNo = null;
      this.addMode = true;
      alert('Record updated succesfully');
      this.getEmployeeData();
    })
  }

  deleteEmployeeData(empNo) {
    this.storageService.deleteEmployeeData(empNo).subscribe(data => {
      console.log('response ' + data);
      this.getEmployeeData();
    })
  }

  onSubmit() {
    if (this.addMode) {
      if (this.name && this.age && this.empNo) {

        if (this.items.some(item => item.empNo === this.empNo)) {
          alert('Employee with same employee number already exist');
          return
        }
        const row = { empNo: this.empNo, name: this.name, age: this.age };
        this.saveEmployeeData(row);
      } else {
        alert('Please enter name, age and empNo');
      }
    } else {
      const row = { empNo: this.empNo, name: this.name, age: this.age };
      this.updateEmployeeData(row, this.empNo);

    }
  }

  onEdit(item) {
    this.addMode = false;
    this.empNo = item.empNo;
    this.age = item.age;
    this.name = item.name;
  }

  onDelete(item) {
    this.deleteEmployeeData(item.empNo);
  }

  onCancel() {
    this.name = null;
    this.age = null;
    this.empNo = null;
    this.addMode = true;
  }
}
