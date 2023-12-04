import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;
  error: boolean = true
  errorMsg: string = ''

  constructor(private _apiService: ApiService) { }

  login() {
    const usuario = { email: this.email, password: this.password };
    this._apiService.postLogin(usuario).subscribe({
      next: (data) => {
        localStorage.setItem('token', data.usuario_token);
        this.error = false;
      },
      error: (error: any) => {
        this.errorMsg = error.error.msg
      }
    })
  }
}