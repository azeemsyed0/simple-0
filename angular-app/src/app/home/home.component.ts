import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { User } from 'src/models/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'SimpleZero';
  signupForm: FormGroup;
  submitted: boolean = false;

  constructor(
    public router: Router,
    public loginService: LoginService,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: new FormControl('',[ Validators.required ]),
      email: new FormControl('',[ Validators.required, Validators.email ]),
      password: new FormControl('',[ Validators.required ])
    });
  }

  addUser(data) {
      console.log("This is data ->  ",data);
      if (!data.name && !data.email && !data.password) { return; }
      this.loginService.addEmployee({name:data.name, email:data.email, password:data.password} as User)
        .subscribe( data => {
          console.log('successfully added', data);
        });        
      ;
  }

  signup() {
    this.submitted = true;

    if(this.signupForm.valid) {
      const data = this.signupForm.value;
      console.log(this.email.errors);
      this.addUser(data);
    }
  }

  get password() {
    return this.signupForm.get('password');
  }
  
  get email() {
    return this.signupForm.get('email');
  }

  get name() {
    return this.signupForm.get('name');
  }
}
