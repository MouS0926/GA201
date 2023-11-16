import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService){}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.authService.register(this.username, this.email, this.password).subscribe(
        (user) => {
          // Handle successful registration, e.g., redirect to login page
          alert("registered successfully")
          console.log('Registration successful:', user);
        },
        (error) => {
          // Handle registration failure
          console.error('Registration error:', error);
        }
      );
    }
  }

}
