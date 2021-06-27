import { stringify } from '@angular/compiler/src/util';
import {Component} from '@angular/core';
import { NgForm } from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import { MatDialog } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { EditStudProfileComponent } from '../edit-stud-profile/edit-stud-profile.component';
import { EditTcrProfileComponent } from '../edit-tcr-profile/edit-tcr-profile.component';
import { Teacher } from '../models/teacher';
import {StudentService} from '../student.service';

@Component({

  selector: 'studprofile',
  templateUrl: 'studprofile.component.html',
  styleUrls: ['./studprofile.component.css']
})
export class StudProfileComponent {
  studentName ="";
  studentAge:number;
  studentBatch ="";
  studentDept="";
  studentRegn ="";
  studentRoll =""
  studentEmail="";
  studentPass="";
  studentSubjects:any;
  index:number;
  studdetails:any[];
  constructor(private authService: AuthService,public dialogService: MatDialog, public studentService: StudentService) { }
  ngOnInit(){
    this.authService.getStudent().subscribe(response => {
      this.studentName = response.name;
      this.studentAge = response.age;
      this.studentBatch = response.batch;
      this.studentDept = response.dept;
      this.studentRegn = response.regn;
      this.studentRoll = response.roll
      this.studentEmail = response.email;
      this.studentPass = response.password;
      this.studentSubjects = response.subjects;
    })



  }

  onEdit(studentName,studentAge,studentBatch,studentDept,studentRegn,studentRoll,studentEmail,studentPass){
    //this.index = i;
    const dialogRef = this.dialogService.open(EditStudProfileComponent,{
      data :{sname:studentName,sage:studentAge,sbatch:studentBatch,sdept:studentDept,sregn:studentRegn,sroll:studentRoll,semail:studentEmail,spass:studentPass,ssub:this.studentSubjects}
    });

   dialogRef.afterClosed().subscribe(result => {
    this.authService.getStudent().subscribe(response => {
      this.studentName = response.name;
      this.studentAge = response.age;
      this.studentBatch = response.batch;
      this.studentDept = response.dept;
      this.studentRegn = response.regn;
      this.studentRoll = response.roll
      this.studentEmail = response.email;
      this.studentPass = response.password;
      this.studentSubjects = response.subjects;
    })

    });

  }

}

