import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urls = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  registerUser(user:any){
    return this.http.post<any>(`${environment.baseUrlNode}register`,user);
  }
  login(user:any){
    return this.http.post<any>(`${environment.baseUrlNode}login`,user);
  }
  loginbyphone(user:any){
    return this.http.post<any>(`${environment.baseUrlNode}loginphone`, user);

  }
  getUserProfile(){
    return this.http.get<any>(`${environment.baseUrlNode}profile`);
  }
  getdatausernest(){
    return this.http.get<any>(`${this.urls}`);
  }

  myprofile(id:any){
    return this.http.get<any>(`${environment.baseUrlNode}profile/${id}`);
  }

  isLogin(){
    return !!localStorage.getItem('token');
  }
  addSaldo(saldo:any){
    return this.http.put<any>(`${environment.baseUrlNode}addsaldo`,saldo);
  }
}
