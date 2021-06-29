import { Component, Inject, OnInit } from '@angular/core';
import {SubjectService} from '../subject.service';
import {FormControl, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public subjectService: SubjectService) { }


    formControl = new FormControl('', [
      Validators.required
      // Validators.email,
    ]);

    getErrorMessage() {
      return this.formControl.hasError('required') ? 'Required field' :
        this.formControl.hasError('email') ? 'Not a valid email' :
          '';
    }

  ngOnInit(): void {
    console.log(this.data);
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    if(this.data.ca1 ==null || this.data.ca2 ==null || this.data.ca3 ==null || this.data.ca4 ==null){
     this.data.final= null;
      }
      else{
        this.data.final = Math.round((this.data.ca1 + this.data.ca2 + this.data.ca3 + this.data.ca4)*0.3);
      }
    this.subjectService.updateSubject(this.data);
  }

}
