import { Component ,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from '../auth/auth.actions';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthState } from '../auth/auth.reducer';
import { selectAuthState } from '../auth/auth.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginFormModel = {
    email: '',
    password: ''
  };

  authState$!: Observable<AuthState>;

  constructor(private store: Store,private router: Router){
    
  }
  onSubmit(loginForm: NgForm): void {
    if (loginForm.valid) {
      // Dispatch the login action
      this.store.dispatch(AuthActions.login({ email: this.loginFormModel.email, password: this.loginFormModel.password }));
    }
  }

  ngOnInit(): void {
    this.authState$ = this.store.select(selectAuthState)
    this.authState$.subscribe((authState) => {
      if (authState.user) {
        // Display success alert
        alert('Login successful!');
        this.router.navigate(['/'])
      } else if (authState.error) {
        // Display error alert
        alert(`Login failed: ${authState.error}`);
      }
    });
  }

}
