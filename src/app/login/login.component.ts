import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

  }

  loginForm: FormGroup;
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    onSubmit() {
  if (this.loginForm.valid) {
    alert('Dang nhap thanh cong');
    this.loginForm.reset();
  }
}

}
