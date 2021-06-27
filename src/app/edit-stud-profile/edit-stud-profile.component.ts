import { Component, Inject, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentService } from '../student.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-edit-stud-profile',
  templateUrl: './edit-stud-profile.component.html',
  styleUrls: ['./edit-stud-profile.component.css']
})
export class EditStudProfileComponent implements OnInit {

  studName:string;
  studAge:number;
  studBatch: string;
  studDept:string;
  studRegn:string;
  studRoll:string;
  studEmail:string;
  studPass:string;
  subjects:any;

  constructor(public dialogRef: MatDialogRef<EditStudProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private studentService: StudentService) { }

  ngOnInit(): void {
    this.studName = this.data.sname;
    this.studAge = this.data.sage;
    this.studBatch = this.data.sbatch
    this.studDept = this.data.sdept;
    this.studRegn = this.data.sregn;
    this.studRoll = this.data.sroll;
    this.studEmail = this.data.semail;
    this.studPass = this.data.spass;
    this.subjects = this.data.ssub;
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    // emppty stuff
  }

  stopEdit(): void {
    this.studentService.updateStudent(this.studName,this.studAge,this.studBatch,this.studDept,this.studRegn,this.studRoll,this.studEmail,this.studPass,this.subjects);
    //console.log(this.tcrName);
    this.dialogRef.close();
  }

}
