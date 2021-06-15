import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";
import {MatCardModule} from "@angular/material/card";


@Component({
  selector: 'student-login',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})

export class StudentLoginComponent{

  constructor(public authService: AuthService){}

  isLoading = false;
  onLogin(form: NgForm){
    if(form.invalid){
      return;
    }
    this.isLoading = true;
    this.authService.studentlogin(form.value.email, form.value.password);
  }
}
