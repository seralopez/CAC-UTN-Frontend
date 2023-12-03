import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private _apiService: ApiService) { }

  login() {
    const usuario = { email: this.email, password: this.password };
    this._apiService.postLogin(usuario).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (error: any) => {
        console.log(error.error.msg)
      }
    })
  }
}