import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";


@Component({
  selector: 'teacher-login',
  templateUrl: './teacherlogin.component.html',
  styleUrls: ['./teacherlogin.component.css']
})

export class TeacherLoginComponent{

  constructor(public authService: AuthService){}

  isLoading = false;
  onLogin(form: NgForm){
    if(form.invalid){
      return;
    }
    this.isLoading = true;
    this.authService.teacherlogin(form.value.email, form.value.password);
  }
}
