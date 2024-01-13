import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { SettingsComponent } from '../components/settings/settings.component';
import { AppointmentsComponent } from '../components/appointments/appointments.component';
import { TagsComponent } from 'src/components/tags/tags.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
  { path: 'appointments', component: AppointmentsComponent , title: 'Appointments' },
  { path: 'tags', component: TagsComponent , title: 'Tags' },
  { path: 'settings', component: SettingsComponent , title: 'Settings' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
