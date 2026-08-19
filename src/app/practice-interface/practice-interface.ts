import { Component, EventEmitter, inject, Output } from '@angular/core';
import { BasicService } from '../services/basic-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from '../modules/user';

@Component({
  selector: 'app-practice-interface',
  imports: [],
  templateUrl: './practice-interface.html',
  styleUrl: './practice-interface.css',
})
  
export class PracticeInterface {
  ngOnInit() {
    this.getUsers();
    this.practiceData.emit(this.profileData);
  }
  // @Output() practiceData = new EventEmitter<any>();
   @Output() practiceData = new EventEmitter<string>();
  

  userData: User[] = [];
  userService=inject(BasicService);
  // user=toSignal<User[]>(this.userService.getUsers());

  constructor(private userServices: BasicService) {
  }

  getUsers() {
    this.userServices.getUsers().subscribe((data) => {
      this.userData = data;
      console.log(data);
    });
  }
  profileData: any = 'madhu';
  
}
