import { Component } from '@angular/core';
import { FormGroup,FormBuilder,NgForm } from  "@angular/forms"

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
   user:{
    name:string,
    email:string
    password:string
    age:number|null
    country:string
    accept:boolean
  }=
  {name:"",
  email:"",
  password:"",
  age:null,
  country:"",
  accept:false
}
 


onSubmit(form:NgForm):void{
 
  console.log("sub");
  
}

}
