import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  private authListenerSubs: Subscription;
  isAuthenticated = false;
  status ="";
  statusListener: Subscription;
  constructor(private authService: AuthService){}

  ngOnInit(){
    this.isAuthenticated = this.authService.getIsAuth();
    this.statusListener = this.authService.getStatusListener().subscribe(status => {
      this.status = status;
    });
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }
  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }

  onLogout(){
    this.authService.logout();
  }

}
