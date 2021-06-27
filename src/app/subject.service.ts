import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Subject } from './models/subject';
import { Coursestud } from './models/coursestud';
import {BehaviorSubject} from 'rxjs';
import { Router } from "@angular/router";
import { AuthService } from './auth/auth.service';
import { Coursetcr } from './models/coursetcr';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  dialogData:any;
 // dataChange: BehaviorSubject<Subject[]> = new BehaviorSubject<Subject[]>([]);

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  updateSubject(subject: Subject): void {
    this.dialogData = subject;
    console.log(this.dialogData);
  }

  getDialogData() {
    return this.dialogData;
  }

  createSubject(subname: String, subcode: String){
    const subject: Subject = {
      subname: subname,
      subcode: subcode,
      marks: [],
    }
    this.http.post<{message: string, result: JSON}>("http://localhost:3000/api/subject/"+ this.authService.getUserId(),subject)
    .subscribe(response => {
      const res = response
      this.http.put("http://localhost:3000/api/teacher/create/"+ this.authService.getUserId(), response.result )
      .subscribe(resp => {
        console.log(resp);
        this.router.navigate(['/teacherhome']);
      })
    })
}

getSubject(id: string)
{
  return this.http.get<{
    subname: string,
    subcode: string,
    marks:Array<any>
  }>("http://localhost:3000/api/subject/" + id)
}

getSub(sname:string, scode:string){
  return this.http.get<{
    subname: string,
    subcode: string,
    marks:Array<any>
  }>("http://localhost:3000/api/subject/std/" + scode);
}

updateData(_id:string, subname:string, subcode: string, marks: Array<any>){
  const subject: Subject = {
    subname: subname,
    subcode: subcode,
    marks: marks
  }
  this.http.put("http://localhost:3000/api/subject/" + _id, subject)
  .subscribe(response =>{
    console.log(response);
  })
}

joinSubject(subname:string, subcode:string){
  const coursestud: Coursestud = {
    sname:subname,
    scode:subcode,
    join: false
  }
  this.http.put("http://localhost:3000/api/student/join/" + this.authService.getUserId(), coursestud)
  .subscribe(response =>{
    this.authService.getStudent().subscribe(result => {
      const coursetcr: Coursetcr = {
        sname:result.name,
        scode: subcode,
        subid: result.roll
      }
      this.http.put("http://localhost:3000/api/subject/join/" + this.authService.getUserId(), coursetcr)
      .subscribe(res => {
        console.log(res);
      });
    });

  });
  this.router.navigate(['/studenthome']);

}

}
