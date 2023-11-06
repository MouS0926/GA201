import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn:boolean=false
  constructor(private authservice:AuthService){

    this.isLoggedIn=authservice.isLoggedIn()
  }
}
