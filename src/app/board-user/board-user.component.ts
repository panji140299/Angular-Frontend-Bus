import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  form: any = {
    code: null,
    capacity: null,
    make: null,
    agency: null
  };
  agencyList: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isLoggedIn= false;
  roles: any;
  showAddBus: any;
  

  constructor(private authService: AuthService, private userService: UserService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    const user = this.tokenStorageService.getUser();
    this.roles = user.roles;
    this.showAddBus = this.roles.includes('ADMIN');
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
    this.userService.getAgencyAll().subscribe((data:any)=>{
      this.agencyList=data;
    })
  }
  }

  onSubmit(): void {
    const { code,  capacity, make, agency } = this.form;

    this.authService.addBus(code, capacity, make,agency).subscribe(
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