import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class LoginService {
    private http = inject(HttpClient); // Modern functional injection
    private apiUrl = 'https://jsonplaceholder.typicode.com/users';

    getUsers(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }
    getUserData() {
        return this.http.get(`${this.apiUrl}`);
    }

}
