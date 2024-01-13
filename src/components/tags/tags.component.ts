import { Component, OnInit } from '@angular/core';
import { TagService } from './tag.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTagsComponent } from '../add-tags/add-tags.component';
import { EditTagComponent } from '../edit-tag/edit-tag.component';
import Swal from 'sweetalert2';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags: any[] = [];

  constructor(
    private matDialog: MatDialog,
    private tagService: TagService,
    private messageService: MessageService
    ) {}
  ngOnInit(): void {
    this.loadTags();
  }
  addTags(): void {
    const dialogRef = this.matDialog.open(AddTagsComponent, {
      width: '500px',
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.loadTags();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Tag added successfully',
        });
      }
    });
  }
  editTag(tag : Object): void {
    const dialogRef = this.matDialog.open(EditTagComponent, {
      data: tag,
      width: '500px',
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.loadTags();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Tag edited successfully',
        });
      }
    });
  }
  deleteTag(id: String): void {
    Swal.fire({
      title: 'Are you sure you want to delete this tag?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.tagService.deleteTag(id).subscribe(
          response => {
            this.loadTags();
          },
          (error) => {
            console.error('Error fetching tags:', error);
          }
        );
      }
    });
  }
  loadTags(): void {
    this.tagService.getTags().subscribe(
      (data) => {
        this.tags = data;
      },
      (error) => {
        console.error('Error fetching tags:', error);
      }
    );
  }
}
