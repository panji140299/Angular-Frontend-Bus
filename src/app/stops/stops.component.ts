import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { Stops } from './stops';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.css']
})
export class StopsComponent implements OnInit {

  stops : Stops[] = []
  private roles: string[] = [];
  isLoggedIn = false;
  TambahStop = false;

  constructor(private userService: UserService, private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {
    this.getStops();
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.TambahStop = this.roles.includes('ADMIN');
    }
  }
  getStops(){
    this.userService
      .getStops()
      .subscribe(stops => this.stops = stops)
  }
 
}
