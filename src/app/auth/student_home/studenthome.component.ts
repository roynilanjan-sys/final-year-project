import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth.service";

@Component({
  selector: 'student-home',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudentHomeComponent implements OnInit,OnDestroy{
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
