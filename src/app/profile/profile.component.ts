import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { User } from '../User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  profile: User={
    id:0,
    firstname: '',
    lastname:'',
    email:'',
    password: '',
    mobilenumber: ''
  };
  isLoggedIn= false;

  constructor(private token: TokenStorageService, private userService: UserService, private actRoute: ActivatedRoute) {
    this.profile.id = this.actRoute.snapshot.params.id
 
   }
   ngOnInit(): void {
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
    this.currentUser = this.token.getUser();
    this.getProfile()
  }
  }

  getProfile(){
    this.userService
    .getUserProfile(this.profile.id)
    .subscribe(res => {
      this.profile = res
    })
  }
}
