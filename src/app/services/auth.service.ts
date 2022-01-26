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

  register(email: string,firstname:string,lastname:string, mobilenumber:string, password: string): Observable<any> {
    return this.http.post(AUTH_API + '/user/signup', {
      email,
      firstname,
      lastname,
      mobilenumber,
      password
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
  addTrip(fare:number, journeyTime:string, agency: number, deststop: number,sourcestop:number, bus:number): Observable<any>{
    return this.http.post(AUTH_API + '/v1/reservation/trip-add', {
      fare,
      journeyTime,
      agency,
      deststop,
      sourcestop,
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
