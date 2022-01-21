import { Component, OnInit} from '@angular/core';
import { Observable, of } from 'rxjs';
import { TripSchedule } from './tripSchedule';
import { UserService } from '../services/user.service'; 
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-trip-schedule',
  templateUrl: './trip-schedule.component.html',
  styleUrls: ['./trip-schedule.component.css']
})
export class TripScheduleComponent implements OnInit{

  tripSchedule : TripSchedule[] = []
  private roles: string[] = [];
  isLoggedIn = false;
  TambahTripSchedule = false;
  TambahTrip = false;

  constructor(private userService: UserService, private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {
    this.getTripSchedule()
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.TambahTrip = this.roles.includes('ADMIN');
      this.TambahTripSchedule = this.roles.includes('ADMIN');
    }
  }
  getTripSchedule(){
    this.userService
      .getTripSchedule()
      .subscribe(tripSchedule => this.tripSchedule = tripSchedule)
  }
 
}
