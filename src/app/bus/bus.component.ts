import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {


  isSuccessful = false;
  errorMessage = '';
  busList: any;

  constructor(private userService: UserService, private http: HttpClient, private authService:AuthService) { }

  ngOnInit(): void {
    this.userService.getBus().subscribe((data:any)=>{
      this.busList=data;
    })
  }


}
