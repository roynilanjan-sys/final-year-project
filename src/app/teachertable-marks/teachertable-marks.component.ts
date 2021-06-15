import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'teacher-table-marks',
  templateUrl: './teachertable-marks.component.html',
  styleUrls: ['./teachertable-marks.component.css']
})
export class TeacherTableMarksComponent implements OnInit {
  modalContent: any;
  closeResult: string;
  
 
  constructor(private modalService: NgbModal) { 

  }


  ngOnInit(): void {
  }

  teacher:any[]=[
    { 'Name':'Anirban Pal' , 'Roll':1 , 'Test1':25 , 'CA1':10 , 'CA2':18 , 'PA1': 21 , 'Test2':15 , 'CA3':19 , 'CA4':13 , 'PA2': 19 },
    { 'Name':'Ananway Ghatak' , 'Roll':2 , 'Test1':23 , 'CA1':18 , 'CA2':10 , 'PA1': 22 , 'Test2':15 , 'CA3':17 , 'CA4':12 , 'PA2': 23 },
    { 'Name':'Akash Bose' , 'Roll':3 , 'Test1':22 , 'CA1':12 , 'CA2':13 , 'PA1': 22 , 'Test2':20 , 'CA3':18 , 'CA4':15 , 'PA2': 20 },
    { 'Name':'Chandradip Panja' , 'Roll':4 , 'Test1':26 , 'CA1':10 , 'CA2':17 , 'PA1': 10 , 'Test2':22 , 'CA3':19 , 'CA4':10 , 'PA2': 20 },
    { 'Name':'Nilanjan Roy' , 'Roll':5 , 'Test1':20 , 'CA1':11 , 'CA2':18 , 'PA1': 20 , 'Test2':23 , 'CA3':19 , 'CA4':15 , 'PA2': 10 }
  ];

 /* open(content, stu) {
    this.modalContent = stu
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title' , size: 'lg'});
  }*/

  /*open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }*/


  open(targetModal: any, tcr: { Name: string; Roll: string; Test1: string; CA1: string; CA2: string; PA1: string; Test2: string; CA3: string; CA4: string; PA2: string; }) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 'lg'
   });
    document.getElementById('Nm').setAttribute('value', tcr.Name);
    document.getElementById('Rl').setAttribute('value', tcr.Roll);
    document.getElementById('T1').setAttribute('value', tcr.Test1);
    document.getElementById('C1').setAttribute('value', tcr.CA1);
    document.getElementById('C2').setAttribute('value', tcr.CA2);
    document.getElementById('P1').setAttribute('value', tcr.PA1);
    document.getElementById('T2').setAttribute('value', tcr.Test2);
    document.getElementById('C3').setAttribute('value', tcr.CA3);
    document.getElementById('C4').setAttribute('value', tcr.CA4);
    document.getElementById('P2').setAttribute('value', tcr.PA2);
 }
}