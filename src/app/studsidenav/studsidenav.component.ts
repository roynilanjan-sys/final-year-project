import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-studsidenav',
  templateUrl: './studsidenav.component.html',
  styleUrls: ['./studsidenav.component.css']
})
export class StudSidenavComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;

  constructor(private observer: BreakpointObserver) { }


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


  ngOnInit(): void {
  }

}
