import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from '../models/newUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(user: NewUser) {
    return this.http.post('http://localhost:9000/account/api/v1/add', user);
  }

  findUser(username: string) {
    return this.http.get(`http://localhost:9000/account/api/v1/query?username=${username}`);
  }

}
