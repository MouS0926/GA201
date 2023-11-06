import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email:string=""
  password:string=""

constructor(private authservice:AuthService){}
  onLogin(){
    this.authservice.login(this.email,this.password)
  }
}
