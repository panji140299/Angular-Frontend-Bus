import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-trip-add',
  templateUrl: './trip-add.component.html',
  styleUrls: ['./trip-add.component.css']
})
export class TripAddComponent implements OnInit {
  form: any = {
    fare: null,
    journeyTime: null,
    agency: null,
    sourcestop: null,
    deststop: null,
    bus: null
  };
  agencyList: any;
  sourcestop: any;
  deststop: any;
  busList: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAgency().subscribe((data:any)=>{
      this.agencyList=data;
    })
    this.userService.getBus().subscribe((data:any)=>{
      this.busList=data;
    })
    this.userService.getStops().subscribe((data:any)=>{
      this.deststop=data
      this.sourcestop=data
    })
  }

  onSubmit(): void {
    const { fare, journeyTime, agency, sourcestop, deststop, bus } = this.form;

    this.authService.addTrip(fare, journeyTime, agency, sourcestop, deststop, bus).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
