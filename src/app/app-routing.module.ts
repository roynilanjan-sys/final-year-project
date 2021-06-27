import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
//import { AuthGuard } from "./auth/auth.guard";
//import { LoginComponent } from "./auth/login/login.component";
//import { SignupComponent } from "./auth/signup/signup.component";
import { HomeComponent } from "./home/home.component";
//import { TableComponent } from "./table/table.component";
import { StudentLoginComponent } from "./auth/student_login/studentlogin.component"
import { TeacherComponent } from "./teacher/teacher.component";
import { StudentComponent } from "./student/student.component";
import { TeacherLoginComponent } from "./auth/teacher_login/teacherlogin.component"
import { StudentSignupComponent } from "./auth/student_signup/studentsignup.component";
import { TeacherSignupComponent } from "./auth/teacher_signup/teachersignup.component";
import { StudentTableMarksComponent } from "./studenttable-marks/studenttable-marks.component";
import { TeacherTableMarksComponent } from "./teachertable-marks/teachertable-marks.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { StudSidenavComponent } from "./studsidenav/studsidenav.component";
import { JoinSubjectComponent } from "./joinsubject/joinsubject.component";
import { CreateSubjectComponent } from "./createsubject/createsubject.component";
import { StudProfileComponent } from "./studprofile/studprofile.component";
import { TcrProfileComponent } from "./tcrprofile/tcrprofile.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'teacherhome', component:TeacherComponent},
  {path: 'home', component: HomeComponent},
  {path: 'studenthome', component:StudentComponent},
  {path: 'studentsignup', component:StudentSignupComponent},
  {path: 'teachersignup', component:TeacherSignupComponent},
  //{path: 'table', component:TableComponent},
  {path: 'studentlogin', component:StudentLoginComponent},
  {path: 'teacherlogin', component:TeacherLoginComponent},
  {path: 'studenttable-marks', component:StudentTableMarksComponent},
  {path: 'teachertable-marks/:id', component:TeacherTableMarksComponent},
  {path: 'app-sidenav', component:SidenavComponent},
  {path: 'app-studsidenav', component:StudSidenavComponent},
  {path: 'join-subject', component:JoinSubjectComponent},
  {path: 'create-subject', component:CreateSubjectComponent},
  {path: 'stud-profile', component:StudProfileComponent},
  {path: 'tcr-profile', component:TcrProfileComponent}

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
//providers: [AuthGuard]
})
export class AppRoutingModule{

}
