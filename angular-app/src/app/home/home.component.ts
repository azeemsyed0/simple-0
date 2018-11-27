import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
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

  constructor(
    public router: Router,
    public loginService: LoginService,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl
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
    const data = this.signupForm.value;
    
    this.addUser(data);
  }
}
