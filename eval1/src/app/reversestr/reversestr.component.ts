import { Component } from '@angular/core';

@Component({
  selector: 'app-reversestr',
  templateUrl: './reversestr.component.html',
  styleUrls: ['./reversestr.component.css']
})
export class ReversestrComponent {
  inputstring:string=""
  reversedString:string=""

  reverseString(){
    this.reversedString=this.inputstring.split("").reverse().join("")
  }
}
