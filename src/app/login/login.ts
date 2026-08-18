import { Component, inject } from '@angular/core';
import{signal} from '@angular/core';
import { LoginService } from './login-service';
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private loginService:LoginService){
    
  }
  ngOnInit(){
    this.user();
    this.users();

  }
user(){
    this.loginService.getUsers().subscribe((data)=>{
        console.log(data);
    })
}
users(){
    this.loginService.getUserData().subscribe((data)=>{
        console.log(data);
    })
}


  count=signal(0);

  increment(){
    this.count.set(this.count() + 1);
  }
  decrement(){
    this.count.set(this.count() - 1);
  } 
  reset(){
    this.count.set(0);
  }

}
