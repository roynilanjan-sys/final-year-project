import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { NgForm,FormControl, Validators } from '@angular/forms';
import { MatDialog,MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SubjectService} from '../subject.service';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'teacher-table-marks',
  templateUrl: './teachertable-marks.component.html',
  styleUrls: ['./teachertable-marks.component.css']
})
export class TeacherTableMarksComponent implements OnInit {
  modalContent: any;
  closeResult: string;
  index:number;
  Roll:String;
  exampleDatabase: any;
  teacher:any[];
  @ViewChild('userForm') userForm:NgForm;
  constructor(public dialogService: MatDialog, public subjectService: SubjectService) {

  }

 // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.teacher=[
      { 'Name':'Anirban Pal' , 'Roll':1 , 'CA1':10,'Test1':25 ,  'CA2':18 , 'PA1': 21 , 'CA3':19 ,'Test2':15 ,  'CA4':13 , 'PA2': 19 },
      { 'Name':'Ananway Ghatak' , 'Roll':2 , 'CA1':18 ,'Test1':23 ,  'CA2':10 , 'PA1': 22 , 'CA3':17 ,'Test2':15 ,  'CA4':12 , 'PA2': 23 },
      { 'Name':'Akash Bose' , 'Roll':3 , 'CA1':12 ,'Test1':22 ,  'CA2':13 , 'PA1': 22 , 'CA3':18 ,'Test2':20 ,  'CA4':15 , 'PA2': 20 },
      { 'Name':'Chandradip Panja' , 'Roll':4 , 'CA1':10 ,'Test1':26 ,  'CA2':17 , 'PA1': 10 , 'CA3':19 ,'Test2':22 ,  'CA4':10 , 'PA2': 20 },
      { 'Name':'Nilanjan Roy' , 'Roll':5 , 'CA1':11 ,'Test1':20 ,  'CA2':18 , 'PA1': 20 , 'CA3':19 ,'Test2':23 ,  'CA4':15 , 'PA2': 10 }
    ];
    this.exampleDatabase = this.teacher;
  }





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


 /* onEdit(targetModal: any, tcr: { Name: string; Roll: string; Test1: string; CA1: string; CA2: string; PA1: string; Test2: string; CA3: string; CA4: string; PA2: string; }) {
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
*/

onEdit( i:number, Name: string, Roll: string,CA1: string, Test1: string,  CA2: string, PA1: string,CA3: string, Test2: string,  CA4: string, PA2: string){
  this.index = i;
  this.Roll = Roll;
  const dialogRef = this.dialogService.open(EditDialogComponent,{
    data :{Name:Name,Roll:Roll,CA1:CA1,Test1:Test1,CA2:CA2,PA1:PA1,CA3:CA3,Test2:Test2,CA4:CA4,PA2:PA2}
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 1) {
      // When using an edit things are little different, firstly we find record inside DataService by id
      const foundIndex = this.index;
      // Then you update that record using data from dialogData (values you enetered)
      this.exampleDatabase[foundIndex] = this.subjectService.getDialogData();
      // And lastly refresh table
      //this.refreshTable();
    }
  });

}


/*private refreshTable() {
  this.paginator._changePageSize(this.paginator.pageSize);
}
*/
}
