import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  templateUrl: './teachersignup.component.html',
  styleUrls: ['./teachersignup.component.css']
})
export class TeacherSignupComponent{
  constructor(public authService: AuthService){}
  isLoading = false;
  onSignup(form: NgForm){
   if(form.invalid){
     return;
   }
   this.isLoading = true;
  this.authService.teachercreateUser(form.value.name, form.value.age, form.value.dept, form.value.email, form.value.password);
  }
}
