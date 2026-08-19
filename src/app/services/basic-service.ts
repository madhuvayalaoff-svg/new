import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modules/user';

@Service()
export class BasicService {
    private http = inject(HttpClient);
    private apiUrl = 'https://jsonplaceholder.typicode.com/users';


    getUsers(): Observable<any> {
         return this.http.get<any>(this.apiUrl);
        //  console.log(this.apiUrl);
     }
     getUserData() {
         return this.http.get(`${this.apiUrl}`);
     }
     madhuData={
        id:1,
        name:'madhu',
        username:'madhuVayala',
        email:'madhu@gmail.com'
     }
    // getUsers(): Observable<User[]> {
    //      return this.http.get<User[]>(this.apiUrl);
    //  }
    //  getUserData() {
    //      return this.http.get(`${this.apiUrl}`);
    //  }
}
