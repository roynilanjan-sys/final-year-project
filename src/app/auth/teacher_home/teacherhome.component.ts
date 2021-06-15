import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth.service";

@Component({
  selector: 'teacher-home',
  templateUrl: './teacherhome.component.html',
  styleUrls: ['./teacherhome.component.css']
})
export class TeacherHomeComponent implements OnInit,OnDestroy{
  private authListenerSubs: Subscription;
  isAuthenticated = false;
  constructor(private authService: AuthService){}

  ngOnInit(){
    this.isAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }
  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }
}
