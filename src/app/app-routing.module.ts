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
import { BusComponent } from './bus/bus.component';
import { TripComponent } from './trip/trip.component';
import { AgencyComponent } from './agency/agency.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { BoardOwnerComponent } from './board-owner/board-owner.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'editprofile/:id', component: EditProfileComponent },
  { path: 'bus', component: BoardUserComponent },
  { path: 'agency', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'trip-schedule', component: TripScheduleComponent},
  { path: 'stops', component: StopsComponent },
  { path: 'tambahStop', component: StopAddComponent},
  { path: 'tambahTrip', component: TripAddComponent},
  { path: 'tambahTripSchedule', component: TripScheduleAddComponent},
  { path: 'tripByStop', component: TripByStopComponent},
  { path: 'busList', component: BusComponent},
  { path: 'tripList', component:TripComponent},
  { path: 'agencyList', component:AgencyComponent},
  { path: 'owner', component: BoardOwnerComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
