import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy{
  private authListenerSubs: Subscription;
  isAuthenticated = false;
  status = "";
  constructor(private authService: AuthService){}

  ngOnInit(){
    this.isAuthenticated = this.authService.getIsAuth();
    this.status = this.authService.getStatus();
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }
  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }
}
