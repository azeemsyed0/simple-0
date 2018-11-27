import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { User } from 'src/models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'SimpleZero';
  signinForm: FormGroup;

  constructor(
    public router: Router,
    public loginService: LoginService,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: new FormControl(),
      password: new FormControl
    });
  }

  signin() {
    const data = this.signinForm.value;
    console.log("Successfully signed in! :)",data.email);
    this.router.navigate(['/me']);
  }
}
