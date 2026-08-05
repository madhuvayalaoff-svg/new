import { Component, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { Userservice } from '../userservice';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  studentName$=new Subject();
  rollNumber$=new Subject<Number>();//this is for number type onlu it will not accept any other tipe as a value 
  takeUntil=new Subject<void>();//when you dont want any value for subject ew go with void
  // madhuSub$=new Subject('madhu'); when you create a subject we cannot innitialize with defolt value it will give an error same thing with behaviorSubject we ca do it will not give any error
  
//for providing the data type for subject
courceName$:Subject<string>=new Subject<string>();
userSrv=inject(Userservice);

  constructor(){
    setTimeout(()=>{
  this.studentName$.next('angular22');
  this.rollNumber$.next(8309650694);
  this.takeUntil.next();
  this.userSrv.courceDuration$.next('2+1 =3 months');

    },4000);
  }

  ngOnInit(){
    this.studentName$.subscribe((rea:any)=>{
      // debugger;
      console.log(this.studentName$);
      //bihavior Subject
      this.userSrv.courceDuration$.subscribe((data:any)=>{
        debugger;
      })
    })
  }
}
