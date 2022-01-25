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
  modifedtext: any;

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAgencyAll().subscribe((data:any)=>{
      this.agencyList=data;
    })
    this.userService.getStops().subscribe((data:any)=>{
      this.deststop=data
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
  showBuses(agencyId:string){
    return this.userService.getByAgency(parseInt(agencyId))
    .subscribe((res:any) => {
      this.busList = res
    })
  }
  showStop(stopid:string){
    return this.userService.getByStop(parseInt(stopid))
    .subscribe((res:any) => {
      this.sourcestop = res
    })
  }
}
