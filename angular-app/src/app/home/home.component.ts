import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'S0';
  signupForm: FormGroup;

  constructor(
    public router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl
    })
    console.log('bunnies!');
  }

  signup() {
    console.log("sign up data: ",this.signupForm.value);
  }
}
