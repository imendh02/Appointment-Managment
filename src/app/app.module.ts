import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { DataViewModule } from 'primeng/dataview';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HeaderComponent } from '../components/header/header.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsComponent } from '../components/settings/settings.component';
import { AppointmentsComponent } from '../components/appointments/appointments.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TagsComponent } from '../components/tags/tags.component';
import { AddTagsComponent } from '../components/add-tags/add-tags.component';
import { HttpClientModule } from '@angular/common/http';
import { EditTagComponent } from '../components/edit-tag/edit-tag.component';
import { CheckboxModule } from 'primeng/checkbox';
import { AddEventComponent } from '../components/add-event/add-event.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    SettingsComponent,
    AppointmentsComponent,
    TagsComponent,
    AddTagsComponent,
    EditTagComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    FullCalendarModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    ToastModule,
    CheckboxModule,
    CalendarModule,
    InputTextModule,
    DropdownModule,
    PanelModule,
    DataViewModule,
    InputTextareaModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
