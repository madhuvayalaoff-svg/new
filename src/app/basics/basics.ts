import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  imports: [],
  templateUrl: './basics.html',
  styleUrl: './basics.css',
})
export class Basics {
  users: User[] = [];

user: User = {
  id: 1,
  name: 'Madhu',
  email: 'madhu@gmail.com',
  isActive: true
};

}
export interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}