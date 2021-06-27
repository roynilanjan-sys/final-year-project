import {Component} from '@angular/core';
import { NgForm } from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from '@angular/material/form-field';
import { SubjectService } from '../subject.service';

@Component({

  selector: 'create-subject',
  templateUrl: 'createsubject.component.html',
  styleUrls: ['./createsubject.component.css']
})
export class CreateSubjectComponent {
  constructor(public subjectService: SubjectService){}

  isLoading = false;
  onCreate(form: NgForm){
    if(form.invalid){
      return;
    }
    //this.isLoading = true;
    this.subjectService.createSubject(form.value.subname, form.value.subcode);
  }
}

