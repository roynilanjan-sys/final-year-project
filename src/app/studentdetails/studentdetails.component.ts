import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { getMaxListeners } from 'node:process';


@Component({
  selector: 'studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentDetailsComponent implements OnInit {
  modalContent: any;
  closeResult: string;
  
 
  constructor(private modalService: NgbModal) { 

  }


  ngOnInit(): void {
  }

  student:any[]=[
    { 'Name':'Alexa','Age':22,'Batch':0,'Department':'IT','Registration':171220110025,'Roll':0,'Email':'abc@gamil.com','Password':'abc'}
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


  open(targetModal: any, stu: { Name: string; Age: string; Batch: string; Department: string; Registration: string; Roll: string; Email: string; Password: string; }) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 'lg'
   });
    document.getElementById('Nm').setAttribute('value', stu.Name);
    document.getElementById('Ag').setAttribute('value', stu.Age);
    document.getElementById('Bt').setAttribute('value', stu.Batch);
    document.getElementById('Dp').setAttribute('value', stu.Department);
    document.getElementById('Rg').setAttribute('value', stu.Registration);
    document.getElementById('Rl').setAttribute('value', stu.Roll);
    document.getElementById('Em').setAttribute('value', stu.Email);
    document.getElementById('Ps').setAttribute('value', stu.Password);
    }
}