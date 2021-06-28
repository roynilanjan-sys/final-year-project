import { stringify } from '@angular/compiler/src/util';
import {Component} from '@angular/core';
import { NgForm } from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import { MatDialog } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { EditTcrProfileComponent } from '../edit-tcr-profile/edit-tcr-profile.component';
import { Teacher } from '../models/teacher';
import {TeacherService} from '../teacher.service';

@Component({

  selector: 'tcrprofile',
  templateUrl: 'tcrprofile.component.html',
  styleUrls: ['./tcrprofile.component.css']
})
export class TcrProfileComponent {
  teacherName ="";
  teacherAge:number;
  teacherDept="";
  teacherEmail="";
  teacherPass="";
  teacherSubjects:any;
  index:number;
  tcrdetails:any[];
  constructor(private authService: AuthService,public dialogService: MatDialog, public teacherService: TeacherService) { }
  ngOnInit(){
    this.authService.getTeacher().subscribe(response => {
      this.teacherName = response.name;
      this.teacherAge = response.age;
      this.teacherDept = response.dept;
      this.teacherEmail = response.email;
      this.teacherPass = response.password;
      this.teacherSubjects = response.subjects;
    })



  }

  onEdit(teacherName,teacherAge,teacherDept,teacherEmail,teacherPass){
    //this.index = i;
    const dialogRef = this.dialogService.open(EditTcrProfileComponent,{
      data :{tname:teacherName,tage:teacherAge,tdept:teacherDept,temail:teacherEmail,tpass:teacherPass,tsub:this.teacherSubjects}
    });

   dialogRef.afterClosed().subscribe(result => {
    this.authService.getTeacher().subscribe(response => {
      this.teacherName = response.name;
      this.teacherAge = response.age;
      this.teacherDept = response.dept;
      this.teacherEmail = response.email;
      this.teacherPass = response.password;
      this.teacherSubjects = response.subjects;
    })

    });

  }

}