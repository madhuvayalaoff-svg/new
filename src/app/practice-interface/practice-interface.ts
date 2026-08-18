import { Component, inject } from '@angular/core';
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

  }
  userService=inject(BasicService);
  user=toSignal<User[]>(this.userService.getUsers());

  constructor(private userServices: BasicService) {
  }

  getUsers() {
    this.userServices.getUsers().subscribe((data) => {
      console.log(data);
    });
  }
}
