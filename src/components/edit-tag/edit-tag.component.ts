import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { TagService } from '../tags/tag.service';

export interface tagData {
  _id : '',
  name: '',
  color: '#000000'
}

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.css']
})

export class EditTagComponent {

  constructor(
    public dialogRef: MatDialogRef<EditTagComponent>,
    private tagService: TagService,
    @Inject(MAT_DIALOG_DATA) public data: tagData,
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.tagService.editTag(this.data._id,this.data).subscribe(
      response => {
        this.dialogRef.close(response);
      },
      error => {
        console.error('Error saving tag:', error);
      }
    );
  }
}
