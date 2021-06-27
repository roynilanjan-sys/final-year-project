import { Component, Inject, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-edit-tcr-profile',
  templateUrl: './edit-tcr-profile.component.html',
  styleUrls: ['./edit-tcr-profile.component.css']
})
export class EditTcrProfileComponent implements OnInit {

  tcrName:string;
  tcrAge:number;
  tcrDept:string;
  tcrEmail:string;
  tcrPass:string;
  subjects:any;

  constructor(public dialogRef: MatDialogRef<EditTcrProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,public teacherService: TeacherService) { }

  ngOnInit(): void {

    this.tcrName = this.data.tname;
    this.tcrAge = this.data.tage;
    this.tcrDept = this.data.tdept;
    this.tcrEmail = this.data.temail;
    this.tcrPass = this.data.tpass;
    this.subjects = this.data.tsub;
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    // emppty stuff
  }

  stopEdit(): void {
    this.teacherService.updateTeacher(this.tcrName,this.tcrAge,this.tcrDept,this.tcrEmail,this.tcrPass,this.subjects);
    //console.log(this.tcrName);
    this.dialogRef.close();
  }

}
