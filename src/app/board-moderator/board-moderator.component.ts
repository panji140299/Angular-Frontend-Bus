import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {
  form: any = {
    code: null,
    details: null,
    name: null,
    owner: null
  };
  userList: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isLoggedIn= false;
  roles: any;
  showAddAgency: any;

  constructor(private authService: AuthService, private userService: UserService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    const user = this.tokenStorageService.getUser();
    this.roles = user.roles;
    this.showAddAgency = this.roles.includes('ADMIN');
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
    this.userService.getByRole().subscribe((data:any)=>{
      this.userList=data;
    })
  }
  }

  onSubmit(): void {
    const { code, details, name, owner } = this.form;

    this.authService.registerAgency(code, details, name,owner).subscribe(
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
