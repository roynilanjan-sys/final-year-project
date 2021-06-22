import { Component } from '@angular/core';


@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
  })

  export class TableComponent {
    displayedColumns: string[] = ['sub', 'test1', 'ca1', 'ca2', 'pa1', 'test2', 'ca3', 'ca4', 'pa2'];
    dataSource = ELEMENT_DATA;
  }

export interface PeriodicElement {
  sub : string;
  test1 : string;
  ca1 : string;
  ca2 : string;
  pa1 : string;
  test2 : string;
  ca3 : string;
  ca4: string;
  pa2: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {sub:'Database Management System', test1:'21', ca1:'23', ca2:'24', pa1:'38', test2:'24', ca3:'19', ca4:'23', pa2:'40'},

  {sub:'Cloud Computing', test1:'21', ca1:'23', ca2:'24', pa1:'38', test2:'24', ca3:'19', ca4:'23', pa2:'40'},

  {sub:'Operating System', test1:'21', ca1:'23', ca2:'24', pa1:'38', test2:'24', ca3:'19', ca4:'23', pa2:'40'},

  {sub:'Numerical Method', test1:'21', ca1:'23', ca2:'24', pa1:'38', test2:'24', ca3:'19', ca4:'23', pa2:'40'},

  {sub:'Pattern Recognition', test1:'21', ca1:'23', ca2:'24', pa1:'38', test2:'24', ca3:'19', ca4:'23', pa2:'40'},

  {sub:'Data Structure & Algorithm', test1:'21', ca1:'23', ca2:'24', pa1:'38', test2:'24', ca3:'19', ca4:'23', pa2:'40'}
];