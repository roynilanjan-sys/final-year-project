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
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
//import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
//import { SignupComponent } from './auth/signup/signup.component';
//import { TableComponent } from './table/table.component';
//import { DemoMaterialModule } from './material_module';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentLoginComponent } from './auth/student_login/studentlogin.component';
import { TeacherLoginComponent } from './auth/teacher_login/teacherlogin.component';
import { StudentSignupComponent } from './auth/student_signup/studentsignup.component';
import { TeacherSignupComponent } from './auth/teacher_signup/teachersignup.component';
//import { TeacherSidenavComponent } from './teachersidenav/teachersidenav.component';
import { StudentTableMarksComponent } from './studenttable-marks/studenttable-marks.component';
import {ModalDismissReasons, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TeacherTableMarksComponent } from './teachertable-marks/teachertable-marks.component';
import { DemoMaterialModule } from './material_module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StudSidenavComponent } from './studsidenav/studsidenav.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { JoinSubjectComponent } from './joinsubject/joinsubject.component';
import { CreateSubjectComponent } from './createsubject/createsubject.component';
import { StudProfileComponent } from './studprofile/studprofile.component';
import { TcrProfileComponent } from './tcrprofile/tcrprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StudentLoginComponent,
    TeacherLoginComponent,
    StudentComponent,
    TeacherComponent,
    StudentSignupComponent,
    TeacherSignupComponent,
    StudentTableMarksComponent,
    TeacherTableMarksComponent,
    SidenavComponent,
    StudSidenavComponent,
    EditDialogComponent,
    JoinSubjectComponent,
    CreateSubjectComponent,
    StudProfileComponent,
    TcrProfileComponent

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
    MatIconModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule
  ],
  entryComponents:[
    TeacherTableMarksComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
