import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://panjitransportation.herokuapp.com/api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email:string, password: string): Observable<any> {
    return this.http.post(AUTH_API + '/auth', {
      email,
      password
    }, httpOptions);
  }

  register( email: string,firstname:string,lastname:string, mobilenumber:string, password: string): Observable<any> {
    return this.http.post(AUTH_API + '/user/signup', {
      email,
      password,
      firstname,
      lastname,
      mobilenumber
    }, httpOptions);
  }
  registerAgency(code:string, details:string, name: string, id: number): Observable<any>{
    return this.http.post(AUTH_API + '/user/agency', {
      code,
      details,
      name,
      id
    }, httpOptions); 
  }
  addStops( fare: number,code:string,name:string, detail:string): Observable<any> {
    return this.http.post(AUTH_API + '/user/signup', {
      fare,
      code,
      name,
      detail
    }, httpOptions);
  }
}
