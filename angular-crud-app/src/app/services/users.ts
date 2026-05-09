import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id?: number;
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  /**
   * Relative URL to trigger the Angular Proxy.
   * The browser calls http://localhost:4200/api/users, 
   * and the Docker container forwards it to http://user-service:8081/api/users.
   */
  private apiUrl = '/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(id: number, user: User): Observable<User> {
    // Relative path: /api/users/1
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    // Relative path: /api/users/1
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
