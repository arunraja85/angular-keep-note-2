import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.loginForm = formbuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  ngOnInit() { }
  @ViewChild(FormGroupDirective)
  formGroupDirective: FormGroupDirective
  // constructor(){
  // this.loginForm.username = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]));
  // password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]));
  // }

  loginSubmit(loginForm: FormGroup) {
    console.log(loginForm.value);
    this.formGroupDirective.resetForm();
  }
}
