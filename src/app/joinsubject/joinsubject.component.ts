import {Component} from '@angular/core';
import { NgForm } from "@angular/forms";
import { SubjectService } from '../subject.service';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({

  selector: 'join-subject',
  templateUrl: 'joinsubject.component.html',
  styleUrls: ['./joinsubject.component.css']
})
export class JoinSubjectComponent {
  constructor(public subjectService: SubjectService){}

  isLoading = false;
  onJoin(form: NgForm){
    if(form.invalid){
      return;
    }
    //this.isLoading = true;
    this.subjectService.joinSubject(form.value.subname, form.value.subcode);
}
}

