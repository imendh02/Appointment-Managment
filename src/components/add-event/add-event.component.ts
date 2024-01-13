import { Component } from '@angular/core';
import { AppointmentService } from '../appointments/appointment.service';
import { MatDialogRef } from '@angular/material/dialog';
import { TagService } from '../tags/tag.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  event: any = {
    title : '',
    date : '',
    description : ''
  };
  tags: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddEventComponent>,
    private eventService: AppointmentService,
    private tagService: TagService
  ) {}

  ngOnInit(): void {
    this.loadTags();
  }
  
  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    const date = new Date(this.event.date);

// Get day, month, and year components
const day = date.getDate().toString().padStart(2, '0'); // padStart ensures two digits
const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
const year = date.getFullYear();

// Create the formatted date string
const formattedDate = `${day}-${month}-${year}`;
    this.event.date = formattedDate
    console.log(this.event)
    this.eventService.saveEvent(this.event).subscribe(
      response => {
        this.dialogRef.close(response);
      },
      error => {
        console.error('Error saving event:', error);
      }
    );
  }

  loadTags(): void {
    this.tagService.getTags().subscribe(
      (data: any[]) => {
        this.tags = data;
        console.log(this.tags)
      },
      (error) => {
        console.error('Error fetching tags:', error);
      }
    );
  }
}
