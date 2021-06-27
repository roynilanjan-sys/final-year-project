import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Teacher } from './models/teacher';
import {BehaviorSubject} from 'rxjs';
import { Router } from "@angular/router";
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  dialogData:any;
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  updateTeacher(tcrName:string,tcrAge:number,tcrDept:string,tcrEmail:string,tcrPass:string,subjects): void {
    
    const teacher:Teacher={
      _id: this.authService.getUserId(),
      name: tcrName,
      age: tcrAge,
      dept: tcrDept,
      email: tcrEmail,
      password: tcrPass,
      subjects:subjects
    }
    console.log(teacher)
    this.http.put("http://localhost:3000/api/teacher/"+ this.authService.getUserId(),teacher)
    .subscribe(Response => {console.log(Response)})
  }

  getDialogData() {
    return this.dialogData;
  }




}
