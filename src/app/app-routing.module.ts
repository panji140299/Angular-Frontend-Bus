import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { TripScheduleComponent } from './trip-schedule/trip-schedule.component';
import { StopsComponent } from './stops/stops.component';
import { StopAddComponent } from './stop-add/stop-add.component';
import { TripAddComponent } from './trip-add/trip-add.component';
import { TripScheduleAddComponent } from './trip-schedule-add/trip-schedule-add.component';
import { TripByStopComponent } from './trip-by-stop/trip-by-stop.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'bus', component: BoardUserComponent },
  { path: 'agency', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'trip-schedule', component: TripScheduleComponent},
  { path: 'stops', component: StopsComponent },
  { path: 'tambahStop', component: StopAddComponent},
  { path: 'tambahTrip', component: TripAddComponent},
  { path: 'tambahTripSchedule', component: TripScheduleAddComponent},
  { path: 'tripByStop', component: TripByStopComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
