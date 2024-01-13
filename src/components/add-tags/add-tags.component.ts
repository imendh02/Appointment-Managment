import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TagService } from '../tags/tag.service';

@Component({
  selector: 'app-add-tags',
  templateUrl: './add-tags.component.html',
  styleUrls: ['./add-tags.component.css']
})
export class AddTagsComponent {
  TagData: any = {
    name: '',
    color: '#000000'
  };
  constructor(
    public dialogRef: MatDialogRef<AddTagsComponent>,
    private tagService: TagService
    ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.tagService.saveTag(this.TagData).subscribe(
      response => {
        this.dialogRef.close(response);
      },
      error => {
        console.error('Error saving tag:', error);
      }
    );
  }
}
