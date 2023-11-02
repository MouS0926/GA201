import { Component, } from '@angular/core';
import { NgForm ,ValidationErrors,AbstractControl,FormsModule   } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  // user = {
  //   name: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  //   phoneNumber: ''
  // }


  // passwordStrength(passwordControl: AbstractControl): void {
  //   const password = passwordControl.value;
  //   const hasLowerCase = /[a-z]/.test(password);
  //   const hasUpperCase = /[A-Z]/.test(password);
  //   const hasDigit = /\d/.test(password);
  //   const hasSpecialChar = /[@$!%*?&]/.test(password);
  
  //   if (!(hasLowerCase && hasUpperCase && hasDigit && hasSpecialChar && password.length >= 6)) {
  //     passwordControl.setErrors({ 'passwordWeak': true });
  //   } else {
  //     passwordControl.setErrors(null);
  //   }
  // }
  
  // onSubmit(form:NgForm){
  
    
  // }

  user: {
     name: string, 
     email:string,
     password:string,
     confirmPass:string,
     phone: string | null ,
     dateOfBirth:Date|null
    } =
  { 
    name: "",
    email:"",
    password:"",
    confirmPass:"",
    phone:"",
    dateOfBirth:null
   };

  flag: boolean = false;

  onSubmit(form: NgForm): void {

    if(this.passwordCheck()){
      alert("Your Password is not Strong");
      return;
    }
    if(this.confirmPassCheck()){
      alert("Confirm password is not matching with Password");
      return;
    }

   

    if (!this.dateOfbirthCheck(this.user.dateOfBirth)) {
      alert("You must be at least 18 years old");
      return;
    }
    if (form.valid) {
      console.log(this.user);
      this.flag = true;
    }
  }

  passwordCheck(): boolean{
    if(this.user.password!==""){
      const length= this.user.password.length>=6, 
      hasUpperCase = /[A-Z]/.test(this.user.password), 
      hasLowerCase = /[a-z]/.test(this.user.password), 
      hasDigit = /\d/.test(this.user.password), 
      hasSpecialChar = /[!@#$%^&*]/.test(this.user.password);
      
      if(length && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar){
        return false;
      }else{
        return true;
      }
    }
    return false;
  }

  confirmPassCheck(): boolean{
    if(this.user.confirmPass!==""){
      if(this.user.password=== this.user.confirmPass){
        return false;
      }else{
        return true;
      }
    }

    return false;
  }

  dateOfbirthCheck(dateOfBirth:Date|null):boolean{
    if(dateOfBirth)
    {
      const currentYear=new Date()
      const inputDate=new Date(dateOfBirth)

      const currentAge=currentYear.getFullYear()-inputDate.getFullYear()
      if (currentAge >= 18) {
        return true; 
      }
      console.log('Current Age:', currentAge);
    }

    return false
  }

}
