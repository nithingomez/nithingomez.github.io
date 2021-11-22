import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { country } from '../seventh/seventh.component';
import { gte } from './gter.validator';

@Component({
  selector: 'app-eigth',
  templateUrl: './eigth.component.html',
  styleUrls: ['./eigth.component.scss']
})
export class EigthComponent implements OnInit {


  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];


  // contactForm = new FormGroup({
  //   // firstname: new FormControl({ value: 'Rahul', disabled: true }, [Validators.required, Validators.minLength(10)]),
  //   firstname: new FormControl('Rahul', [Validators.required, Validators.minLength(10)]),
  //   lastname: new FormControl('Dravid', [Validators.required, Validators.minLength(10)]),
  //   email: new FormControl(),
  //   gender: new FormControl(),
  //   isMarried: new FormControl(),
  //   country: new FormControl(),
  //   address: new FormGroup({
  //     city: new FormControl(),
  //     street: new FormControl(),
  //     pincode: new FormControl()
  //   })
  // })

  contactForm;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(10)]],
      lastname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      isMarried: ['', [Validators.required]],
      country: ['', [Validators.required]],
      address: this.formBuilder.group({
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        pincode: ['', [Validators.required]],
        numVal: ['', [gte(10)]],
      })
    });

  }


  onSubmit() {
    console.log(this.contactForm.value);
  }



  get firstname() {
    return this.contactForm.get('firstname');
  }

  get lastname() {
    return this.contactForm.get('lastname');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get gender() {
    return this.contactForm.get('gender');
  }

  get isMarried() {
    return this.contactForm.get('isMarried');
  }

  get country() {
    return this.contactForm.get('country');
  }

  get city() {
    return this.contactForm.get("address").get('city');
  }

  get street() {
    return this.contactForm.get("address").get('street');
  }

  get pincode() {
    return this.contactForm.get("address").get('pincode');
  }

  get numVal() {
    return this.contactForm.get("address").get('numVal');
  }


}


