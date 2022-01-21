import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TripSchedule } from '../trip-schedule/tripSchedule';
import { Stops } from '../stops/stops';
import { TripByStop } from '../trip-by-stop/tripbystop';

const API_URL = 'https://panjitransportation.herokuapp.com/api';
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
    
  getTribyStop(sourceStop:number, destStop:number) : Observable<any>{
    
    return this.http.get(API_URL + '/v1/reservation/tripsbystops', {

    });
  }
  
 
}
