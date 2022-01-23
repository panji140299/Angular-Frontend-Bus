import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api';

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
  registerAgency(code:string, details:string, name: string, owner: number): Observable<any>{
    return this.http.post(AUTH_API + '/v1/reservation/agency-add', {
      code,
      details,
      name,
      owner
    }, httpOptions); 
  }
  addBus(code:string, capacity:string, make: string, agency: number): Observable<any>{
    return this.http.post(AUTH_API + '/v1/reservation/bus-add', {
      code,
      capacity,
      make,
      agency
    }, httpOptions); 
  }
  addTrip(fare:number, journeyTime:string, agency: number, sourcestop: number,deststop:number, bus:number): Observable<any>{
    return this.http.post(AUTH_API + '/v1/reservation/trip-add', {
      fare,
      journeyTime,
      agency,
      sourcestop,
      deststop,
      bus
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
