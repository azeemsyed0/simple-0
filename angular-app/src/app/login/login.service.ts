import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserResponse } from '../../models/user.response';
import { ApiList } from '../../shared/api_list';
import { User } from '../../models/users';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class LoginService {
  usersUrl = ApiList.usersUrl;

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersUrl}`);
  }

  addEmployee(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, httpOptions);
  }
}
