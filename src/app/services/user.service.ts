import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TripSchedule } from '../trip-schedule/tripSchedule';
import { Stops } from '../stops/stops';
import { TripByStop } from '../trip-by-stop/tripbystop';
import { User } from '../User';
import { Agency } from '../Agency';
import { Bus } from '../board-user/bus';
import { Trip } from '../trip-add/trip';
import { catchError, map } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

const API_URL = 'https://panjitransportation.herokuapp.com/api';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient, private router: Router) { }

  handleError(error: HttpErrorResponse){
    let msg = '';
    if(error.error instanceof ErrorEvent){
      msg = error.error.message
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`
    }
    return throwError(msg);
  }
  
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
    getBusAll () : Observable<Array<Bus>>{
      return this.http.get<Array<Bus>>(API_URL + '/v1/reservation/getbus');
    }
    getAgencyAll () : Observable<Array<Agency>>{
      return this.http.get<Array<Agency>>(API_URL + '/v1/reservation/getagency');
    }
  getTrip () : Observable<Array<Trip>>{
      return this.http.get<Array<Trip>>(API_URL + '/v1/reservation/trip');
    }
  getByRole () : Observable<Array<User>>{
    return this.http.get<Array<User>>(API_URL+ '/v1/reservation/byrole?roleId=3');
  }
   
  getUserProfile(id:number){
    let api = `${API_URL}/user/profile/${id}`
     return this.http
              .get(api, this.httpOptions)
              .pipe(
                map((res:any)=> res || {}),
                catchError(this.handleError)
        )
    
  }
  getByAgency(id:number){
    let api = `${API_URL}/v1/reservation/byagency?agencyId=${id}`
     return this.http
              .get(api, this.httpOptions)
              .pipe(
                map((res:any)=> res || {}),
                catchError(this.handleError)
        )
  }
  getByStop(id:number){
    let api = `${API_URL}/v1/reservation/bystop?stopid=${id}`
     return this.http
              .get(api, this.httpOptions)
              .pipe(
                map((res:any)=> res || {}),
                catchError(this.handleError)
        )
  }
  updateProfile(id: number, profile: User){
    let api = `${API_URL}/user/update/${id}`
    return this.http
             .put(api, profile, this.httpOptions)
             .pipe(
               catchError(this.handleError)
             )
             .subscribe((res:any)=>{
               this.router.navigate([`profile/${id}`])
             })
  }
    
  getTribyStop(sourceStop:number, destStop:number) : Observable<any>{
    return this.http.get(API_URL + '/v1/reservation/tripsbystops', {
    });
  }
  
 
}
