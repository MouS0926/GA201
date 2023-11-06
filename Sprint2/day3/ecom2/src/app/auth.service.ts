import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }

  login(email:string,password:string){
     const body={email,password}
     return this.http.post<LoginResponse>("https://reqres.in/api/login",body).subscribe(

     (res)=>{
      console.log(res);
      localStorage.setItem('authToken', res.token);
      alert("Login Successfull")
      this.router.navigate(['/'])
     }
     ,
     (err)=>{
     
      console.log(err);
      alert("Wrong Credentials")
      
     }
     )
  }


  isLoggedIn(){
   const authToken= localStorage.getItem("authToken")
   return !!authToken
  }
  
}
