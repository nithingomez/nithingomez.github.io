import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-seventh',
  templateUrl: './seventh.component.html',
  styleUrls: ['./seventh.component.scss']
})
export class SeventhComponent implements OnInit {

  @ViewChild('contactForm', {}) contactForm: NgForm;
  contact: {
    firstname: string;
    lastname: string;
    email: string;
    gender: string;
    isMarried: boolean;
    country: string;
    address: {
      city: string;
      street: string;
      pincode: string;
      numVal: any;
    },
    [key: string]: any
  } = null;

  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  constructor() { }

  ngOnInit(): void {

    this.contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: { city: "Mumbai", street: "Perry Cross Rd", pincode: "400050", numVal: "20" }
    };

  }
  title = 'Template driven forms';

  onSubmit(contactForm: NgForm) {
    console.log(contactForm.value);
  }

  setDefaults() {
    this.contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: { city: "Mumbai", street: "Perry Cross Rd", pincode: "400050", numVal: "34" }
    };
  }

  patchValue() {
    let obj = {
      firstname: "Rahul",
      lastname: "Dravid",
      email: "rahul@gmail.com",
    };

    this.contactForm.control.patchValue(obj);

  }

  changeAddress() {
    let obj = {
      city: "Bangalore",
      street: "Brigade Road",
      pincode: "600100"
    };
    let address = this.contactForm.controls["address"] as FormGroup
    address.patchValue(obj);

  }

  changeCountry() {
    this.contact.country = "1";
  }

  reset(contactForm: NgForm) {
    contactForm.resetForm();
  }

  resetForm() {
    this.contactForm.resetForm();
  }


}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

}
