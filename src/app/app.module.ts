import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import{ HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
//import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
//import { SignupComponent } from './auth/signup/signup.component';
import { StudentComponent } from './student/student.component';
//import { TableComponent } from './table/table.component';
//import { DemoMaterialModule } from './material_module';
import { StudentLoginComponent } from './auth/student_login/studentlogin.component';
import { TeacherLoginComponent } from './auth/teacher_login/teacherlogin.component';
import { StudentSignupComponent } from './auth/student_signup/studentsignup.component';
import { TeacherSignupComponent } from './auth/teacher_signup/teachersignup.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentHomeComponent } from './auth/student_home/studenthome.component';
import { TeacherHomeComponent } from './auth/teacher_home/teacherhome.component';
//import { TeacherSidenavComponent } from './teachersidenav/teachersidenav.component';
import { StudentTableMarksComponent } from './studenttable-marks/studenttable-marks.component';
import {ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TeacherTableMarksComponent } from './teachertable-marks/teachertable-marks.component';
import { DemoMaterialModule } from './material_module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StudSidenavComponent } from './studsidenav/studsidenav.component';
import { StudentDetailsComponent } from './studentdetails/studentDetails.component';
import { JoinSubjectComponent } from './joinsubject/joinsubject.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StudentLoginComponent,
    TeacherLoginComponent,
    StudentHomeComponent,
    TeacherHomeComponent,
    StudentSignupComponent,
    TeacherSignupComponent,
    StudentComponent,
    TeacherComponent,
    StudentTableMarksComponent,
    TeacherTableMarksComponent,
    SidenavComponent,
    StudSidenavComponent,
    StudentDetailsComponent,
    JoinSubjectComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    DemoMaterialModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
