import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  templateUrl: './studentsignup.component.html',
  styleUrls: ['./studentsignup.component.css']
})
export class StudentSignupComponent{
  constructor(public authService: AuthService){}
  isLoading = false;
  onSignup(form: NgForm){
   if(form.invalid){
     return;
   }
   this.isLoading = true;
  this.authService.studentcreateUser(form.value.name, form.value.age, form.value.email, form.value.password);
  }
}
