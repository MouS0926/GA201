import { Component, } from '@angular/core';
import { NgForm ,ValidationErrors,AbstractControl,FormsModule   } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  

 

  user: {
     name: string,
     username:string, 
     email:string,
     password:string,
     confirmPass:string,
     phone: string | null ,
     dateOfBirth:Date|null
    } =
  { 
    name: "",
    username:"",
    email:"",
    password:"",
    confirmPass:"",
    phone:"",
    dateOfBirth:null
   };
   constructor(private userService: UserService) { }
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


  //    if (form.valid) {
  //   // Check if the username already exists
  //   this.userService.checkUsername(this.user.username).subscribe(
  //     usernameExists => {
  //       if (usernameExists) {
  //         alert('Username already exists. Please choose a different username.');
  //       } else {
  //         // If the username is unique, proceed with form submission
  //         this.userService.addUser(this.user).subscribe(
  //           res => {
  //             console.log('User added successfully:', res);
  //             this.flag = true;
  //           },
  //           err => {
  //             console.log(err);
  //           }
  //         );
  //       }
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

  if (form.valid) {


    this.userService.addUser(this.user).subscribe(
                res => {
                  console.log('User added successfully:', res);
                  this.flag = true;
                },
                err => {
                  console.log(err);
                }
              );


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
