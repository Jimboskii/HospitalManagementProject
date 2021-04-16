import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    role: null,
  };

  data: any = {
    username: null,
    email: null,
    password: null,
    role: [],
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.data.username=this.form.username;
    this.data.email=this.form.email;
    this.data.password=this.form.password;
    this.data.role.push(this.form.role);
   
    this.authService.register(JSON.stringify(this.data)).subscribe(
      data1 => {
        console.log(data1);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}