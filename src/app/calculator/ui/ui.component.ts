import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})

export class UiComponent implements OnInit {
  
  bill!: number | null;
  person: number = 1;
  customAmount!: number | null;
  
  staticNumber = '0.00';

  tipPerPerson: number | string = 0;
  totalPerPerson: number | string = 0;

  constructor() { 
}

  ngOnInit(): void {
  }

  fivePercent() {
    this.tipPerPerson = this.bill! * 0.05 / this.person;
    this.totalPerPerson = this.bill! / this.person + this.tipPerPerson;
    this.tipPerPerson = this.tipPerPerson.toFixed(2);
    this.totalPerPerson = this.totalPerPerson.toFixed(2);
  }
  tenPercent() {
    this.tipPerPerson = this.bill! * 0.1 / this.person;
    this.totalPerPerson = this.bill! / this.person + this.tipPerPerson;
    this.tipPerPerson = this.tipPerPerson.toFixed(2);
    this.totalPerPerson = this.totalPerPerson.toFixed(2);
  }
  fifteenPercent() {
    this.tipPerPerson = this.bill! * 0.15 / this.person;
    this.totalPerPerson = this.bill! / this.person + this.tipPerPerson;
    this.tipPerPerson = this.tipPerPerson.toFixed(2);
    this.totalPerPerson = this.totalPerPerson.toFixed(2);
  }
  twentyfivePercent() {
    this.tipPerPerson = this.bill! * 0.25 / this.person;
    this.totalPerPerson = this.bill! / this.person + this.tipPerPerson;
    this.tipPerPerson = this.tipPerPerson.toFixed(2);
    this.totalPerPerson = this.totalPerPerson.toFixed(2);
  }
  fiftyPercent() {
    this.tipPerPerson = this.bill! * 0.5 / this.person;
    this.totalPerPerson = this.bill! / this.person + this.tipPerPerson;
    this.tipPerPerson = this.tipPerPerson.toFixed(2);
    this.totalPerPerson = this.totalPerPerson.toFixed(2);
  }
  custom(event: any) {
    this.tipPerPerson = this.bill! * this.customAmount! / 100 / this.person;
    this.totalPerPerson = this.bill! / this.person + this.tipPerPerson;
    this.tipPerPerson = this.tipPerPerson.toFixed(2);
    this.totalPerPerson = this.totalPerPerson.toFixed(2);

  }

  resetInputs() {
    this.bill = null;
    this.customAmount = null;
    this.person = 1;
    this.tipPerPerson = 0;
    this.totalPerPerson = 0;
  }
}
