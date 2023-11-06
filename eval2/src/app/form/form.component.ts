import { Component } from '@angular/core';
import { NgForm } from  "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  user = {
    name: "",
    email: "",
    password: "",
    age: null,
    country: "",
    accept: false
  };

  onSubmit(form: NgForm): void {
    console.log( this.user);
  }
}
