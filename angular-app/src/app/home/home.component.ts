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
  title = 'S0';
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
    })
    console.log('bunnies!');
  }

  addUser(name:string, email:string, password:string) {    
      name = name.trim();
      if (!name && !email && !password) { return; }
      this.loginService.addEmployee({name:name,email:email,password:password} as User)
        .subscribe( data => {
          console.log(data, () => console.log('successfully added', data));
        });        
      ;
  }

  signup() {
    const data = this.signupForm.value;
    const name = data.user;
    const email = data.email;
    const password = data.password;
    
    this.addUser(name, email, password);
  }
}
