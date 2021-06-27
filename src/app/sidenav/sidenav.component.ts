import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  subjects: Array<any>;
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;

  constructor(private observer: BreakpointObserver, private authService: AuthService) { }


  /*ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }*/


  ngOnInit(){
    this.authService.getTeacher()
    .subscribe(response => {
        this.subjects = response.subjects;
    })
  }

}
