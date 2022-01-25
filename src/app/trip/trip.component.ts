import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  tripList: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
    this.userService.getTrip().subscribe((data:any)=>{
      this.tripList=data;
    })
  }

}
