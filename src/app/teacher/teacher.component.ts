import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Teacher } from '../models/teacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  tcrDetailsListener: Subscription
  tcrdetails: Teacher;
  username ="";
  constructor(private authService: AuthService) { }
  ngOnInit(){
    this.authService.getTeacher().subscribe(response => {
      this.username = response.name;
    })



  }

}
