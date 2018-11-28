import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
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
  submitted: boolean = false;

  constructor(
    public router: Router,
    public loginService: LoginService,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  get password() {
    return this.signinForm.get('password');
  }
  
  get email() {
    return this.signinForm.get('email');
  }

  signin() {
    this.submitted = true;

    if(this.signinForm.valid) {
      const data = this.signinForm.value;
    
      console.log("Successfully signed in! :)",data.email);
      this.router.navigate(['/me']);
    }
  }
}
