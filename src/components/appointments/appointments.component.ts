import { Component } from '@angular/core';
import { CalendarOptions,EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { TagService } from '../tags/tag.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { AddEventComponent } from '../add-event/add-event.component';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
  checkedAll : boolean = true;
  tags: any[] = [];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
    headerToolbar: {
      start: 'prev,next,today',
      center: 'title',
      end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
    },
    events : [
      // Your events go here
      { title: 'Event 1', start: '2024-01-15T10:00:00', end: '2024-01-15T12:00:00' },
      { title: 'Event 2', start: '2024-01-18T14:00:00', end: '2024-01-18T16:00:00' },
      // Add more events as needed
    ]
  };
  constructor(
    private matDialog: MatDialog,
    private tagService: TagService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.loadTags();
  }

  addEvent(): void {
    const dialogRef = this.matDialog.open(AddEventComponent, {
      width: '800px',
      height: '800px'
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
      }
    });
  }

  loadTags(): void {
    this.tagService.getTags().subscribe(
      (data: any[]) => {
        this.tags = data.map(tag => ({ ...tag, checked: true }));
      },
      (error) => {
        console.error('Error fetching tags:', error);
      }
    );
  }

  selectAllTags(): void {
    this.tags.forEach(tag => tag.checked = this.checkedAll);
  }

  changeTag(): void {
    const anyUnchecked = this.tags.some(tag => !tag.checked);
    this.checkedAll = !anyUnchecked;
  }
}
