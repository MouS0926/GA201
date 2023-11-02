import { Component, } from '@angular/core';
import { NgForm ,ValidationErrors,AbstractControl,FormsModule   } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  }


  passwordStrength(passwordControl: AbstractControl): void {
    const password = passwordControl.value;
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[@$!%*?&]/.test(password);
  
    if (!(hasLowerCase && hasUpperCase && hasDigit && hasSpecialChar && password.length >= 6)) {
      passwordControl.setErrors({ 'passwordWeak': true });
    } else {
      passwordControl.setErrors(null);
    }
  }
  
  onSubmit(form:NgForm){
  
    
  }

}
