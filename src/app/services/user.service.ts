import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TripSchedule } from '../trip-schedule/tripSchedule';
import { Stops } from '../stops/stops';
import { TripByStop } from '../trip-by-stop/tripbystop';
import { User } from '../User';
import { Agency } from '../Agency';
import { Bus } from '../board-user/bus';

const API_URL = 'http://localhost:8080/api';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + '/v1/user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + '/v1/admin', { responseType: 'text' });
  }
  getTripSchedule() : Observable<Array<TripSchedule>>{
    return this.http.get<Array<TripSchedule>>(API_URL + '/v1/reservation/tripschedule');
  }
  getStops () : Observable<Array<Stops>>{
      return this.http.get<Array<Stops>>(API_URL + '/v1/reservation/stops');
    }
  getUser () : Observable<Array<User>>{
      return this.http.get<Array<User>>(API_URL + '/v1/reservation/user');
    }
  getBus () : Observable<Array<Bus>>{
      return this.http.get<Array<Bus>>(API_URL + '/v1/reservation/bus');
    }
  getAgency () : Observable<Array<Agency>>{
      return this.http.get<Array<Agency>>(API_URL + '/v1/reservation/agency');
    }
    
  getTribyStop(sourceStop:number, destStop:number) : Observable<any>{
    return this.http.get(API_URL + '/v1/reservation/tripsbystops', {
    });
  }
  
 
}
