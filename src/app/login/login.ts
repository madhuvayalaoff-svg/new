import { Component, inject } from '@angular/core';
import{signal} from '@angular/core';
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
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
