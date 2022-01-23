import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {

  agencyList: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAgency().subscribe((data:any)=>{
      this.agencyList=data;
    })
  }
}
