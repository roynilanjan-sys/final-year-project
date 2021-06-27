import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Teacher } from './models/teacher';
import {BehaviorSubject} from 'rxjs';
import { Router } from "@angular/router";
import { AuthService } from './auth/auth.service';
import { Student } from './models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  dialogData:any;
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  updateStudent(studName:string,studAge:number,studBatch:string,studDept:string,studRegn:string,studRoll:string,studEmail:string,studPass:string,subjects): void {

    const student:Student={
      name: studName,
    age:studAge,
    batch: studBatch,
    dept: studDept,
    regn: studRegn,
    roll: studRegn,
    email: studEmail,
    subjects: subjects
    }
    console.log(student);

    this.http.put("http://localhost:3000/api/student/"+ this.authService.getUserId(), student)
    .subscribe(Response =>
      {console.log(Response)});
  }

  getDialogData() {
    return this.dialogData;
  }




}
