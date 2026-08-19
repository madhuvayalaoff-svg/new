import { Component, inject } from '@angular/core';
import{signal} from '@angular/core';
import { LoginService } from './login-service';
import { PracticeInterface } from "../practice-interface/practice-interface";
@Component({
  selector: 'app-login',
  imports: [PracticeInterface],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  fromProfile:string = '';
  constructor(private loginService:LoginService,
  ){
    
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

    onPracticeData(data: string): void {
    this.fromProfile = data;

    console.log('Received from child:', data);
  }
}
