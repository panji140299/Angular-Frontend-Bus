import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './helpers/auth.interceptor';
import { RegisterAgencyComponent } from './register-agency/register-agency.component';
import { TripScheduleComponent } from './trip-schedule/trip-schedule.component';
import { StopsComponent } from './stops/stops.component';
import { StopAddComponent } from './stop-add/stop-add.component';
import { TripAddComponent } from './trip-add/trip-add.component';
import { TripScheduleAddComponent } from './trip-schedule-add/trip-schedule-add.component';
import { TripByStopComponent } from './trip-by-stop/trip-by-stop.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    RegisterAgencyComponent,
    TripScheduleComponent,
    StopsComponent,
    StopAddComponent,
    TripAddComponent,
    TripScheduleAddComponent,
    TripByStopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
