import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Subject } from 'src/models/subect';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  dialogData:any;
 // dataChange: BehaviorSubject<Subject[]> = new BehaviorSubject<Subject[]>([]);

  constructor(private httpClient: HttpClient) { }

  updateSubject(subject: Subject): void {
    this.dialogData = subject;
    console.log(this.dialogData);
  }

  getDialogData() {
    return this.dialogData;
  }

}
