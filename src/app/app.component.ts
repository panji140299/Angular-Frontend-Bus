import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showOwnerBoard = false;
  showModeratorBoard = false;
  showRegisterAgency = false;
  showAddBus = false;
  showAddTrip = false;
  email?: string;
  id?: number;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ADMIN');
      this.showRegisterAgency = this.roles.includes('OWNER');
      this.showRegisterAgency = this.roles.includes('ADMIN');
      
      this.showAddBus = this.roles.includes('ADMIN');
      this.showAddTrip = this.roles.includes('ADMIN');
      this.showModeratorBoard = this.roles.includes('OWNER');

      this.email = user.email;
      this.id = user.id;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.pathname="login";
  }
}
