import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-trip-by-stop',
  templateUrl: './trip-by-stop.component.html',
  styleUrls: ['./trip-by-stop.component.css']
})
export class TripByStopComponent implements OnInit {
  stopList: any;
  form: any = {
    sourceStop: null,
    destStop: null
  };
  isSuccessful = false;
  errorMessage = '';
  tripstop: any;

  constructor(private userService: UserService, private http: HttpClient, private authService:AuthService) { }

  ngOnInit(): void {
    this.userService.getStops().subscribe((data:any)=>{
      this.stopList=data;
    })
  }
  onSubmit(){
    const { sourceStop, destStop} = this.form;
    this.userService.getTribyStop(sourceStop, destStop).subscribe(
      (data:any) =>{
        this.tripstop= data;
      });
  }

}
