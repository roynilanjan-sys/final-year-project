import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AuthStudData } from './authstuddata.model';
import { AuthTcrData } from './authtcrdata.model';
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { renderFlagCheckIfStmt } from "@angular/compiler/src/render3/view/template";

@Injectable({providedIn: "root"})
export class AuthService{
  private token: string;
  private status: string;
  private userId: string;
  private tokenTimer: NodeJS.Timer;
  private isAuthenticated: boolean;
  private authStatusListener = new Subject<boolean>()
  constructor(private http: HttpClient, private router: Router){}

  getToken(){
    return this.token;
  }
  getUserId(){
    return this.userId;
  }
  getIsAuth(){
    return this.isAuthenticated;
  }
  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }
  getStatus(){
    return this.status;
  }

  studentcreateUser(name: string, age: number, batch:string, dept:string, regn:string, roll:string, email:string, password: string){
    const authStudData: AuthStudData = {
      name: name,
      age: age,
      batch: batch,
      dept: dept,
      regn: regn,
      roll: roll,
      email: email,
      password: password
    };
    this.http.post("http://localhost:3000/api/student/signup",authStudData)
    .subscribe(response => {
      console.log(response);
      this.router.navigate(['/studentlogin']);
    })
  }


  teachercreateUser(name: string, age: number, dept:string, email:string, password: string){
    const authTcrData: AuthTcrData = {
      name: name,
      age: age,
      dept: dept,
      email: email,
      password: password
    };
    this.http.post("http://localhost:3000/api/teacher/signup",authTcrData)
    .subscribe(response => {
      console.log(response);
      this.router.navigate(['/teacherlogin']);
    })
  }

  studentlogin(email:string, password: string){
    const authStudData: AuthStudData = {
      name: null,
      age: 0,
      batch: null, dept: null,
      regn: null,
      roll: null,
      email: email,
      password: password
    };
    this.http.post<{token: string, expiresIn: number, userId: string}>("http://localhost:3000/api/student/login",authStudData)
    .subscribe(response => {
     const token = response.token;
     this.token = token;
     if(token){
       const expiresInDuration = response.expiresIn;
       this.setAuthTimer(expiresInDuration);
     this.isAuthenticated = true;
     this.userId = response.userId;
     this.authStatusListener.next(true);
     const now = new Date();
     const expirationDate = new Date(now.getTime()+ expiresInDuration*1000);
     this.saveAuthData(token, expirationDate,this.userId);
     this.status = "student";
     this.router.navigate(['/home']);
     }
    })


  }


  teacherlogin(email:string, password: string){
    const authTcrData: AuthTcrData = {
      name: null,
      age: 0,
      dept:null,
      email: email,
      password: password
    };
    this.http.post<{token: string, expiresIn: number, userId: string}>("http://localhost:3000/api/teacher/login",authTcrData)
    .subscribe(response => {
     const token = response.token;
     this.token = token;
     if(token){
       const expiresInDuration = response.expiresIn;
       this.setAuthTimer(expiresInDuration);
     this.isAuthenticated = true;
     this.userId = response.userId;
     this.authStatusListener.next(true);
     const now = new Date();
     const expirationDate = new Date(now.getTime()+ expiresInDuration*1000);
     this.saveAuthData(token, expirationDate,this.userId);
     this.status = "teacher";
     this.router.navigate(['/home']);
     }
    })


  }




  autoAuthUser(){
    const authInformation = this.getAuthData();
    if(!authInformation){
      return;
    }
    const now = new Date();
    const expiresIn =authInformation.expiratioDate.getTime() - now.getTime();
    if(expiresIn > 0){
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.setAuthTimer(expiresIn/1000);
      this.authStatusListener.next(true);
    }
  }

  logout(){
    this.token = null;
    this.isAuthenticated = false;
    this.userId = null;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.status = "";
    this.router.navigate(['/']);
  }

  private setAuthTimer(duration: number){
    this.tokenTimer = setTimeout(() => {
      this.logout()
     }, duration*1000)
  }

  private saveAuthData(token: string, expiratioDate: Date, userId: string){
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expiratioDate.toISOString());
    localStorage.setItem("userId", userId);
  }

  private clearAuthData(){
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId");
  }
  private getAuthData(){
    const token = localStorage.getItem("token");
    const expiratioDate = localStorage.getItem("expiration");
    const userId = localStorage.getItem("userId");
    if(!token || !expiratioDate){
      return;
    }
    return {
      token: token,
      expiratioDate: new Date(expiratioDate),
      userId: userId
    }
  }
}
