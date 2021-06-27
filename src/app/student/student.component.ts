import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Component({
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit,OnDestroy{
    private authListenerSubs: Subscription;
    isAuthenticated = false;
    username = "";
    constructor(private authService: AuthService){}

    ngOnInit(){
      this.isAuthenticated = this.authService.getIsAuth();
      this.authService.getStudent().subscribe(res =>{
        this.username = res.name;
      });
      this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      });
    }
    ngOnDestroy(){
      this.authListenerSubs.unsubscribe();
    }
  }
