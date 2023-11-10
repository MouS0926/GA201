import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

interface User {
  id: any;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {
  credentials: { email: string, password: string } = { email: '', password: '' };
  loginError: boolean = false;

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.loginService.loginUser(this.credentials.email, this.credentials.password).subscribe(
        (users: User[]) => {
          const user = users.find(u => u.email === this.credentials.email && u.password === this.credentials.password);
          if (user) {
            // Login successful, navigate to a different component or route
            console.log('Login successful:', user);
            this.router.navigate(['/dashboard', user.id]); // Navigate to the dashboard component
          } else {
            // Login failed
            this.loginError = true;
          }
        },
        err => {
          console.error('Login error:', err);
          this.loginError = true;
        }
      );
    }
  }

}
