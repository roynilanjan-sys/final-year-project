import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { GraphdataComponent } from '../graphdata/graphdata.component';
import { SubjectService } from '../subject.service';
import { Marks } from '../models/marks';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'student-table-marks',
  templateUrl: './studenttable-marks.component.html',
  styleUrls: ['./studenttable-marks.component.css']
})
export class StudentTableMarksComponent implements OnInit {
  modalContent: any;
  closeResult: string;
  index:number;
  res: any;
  subject = [];
  subdata = [];



  constructor(private modalService: NgbModal,public dialogService: MatDialog, public subjectService: SubjectService, private authService: AuthService) {

  }


  ngOnInit(): void {
    this.authService.getStudent()
    .subscribe(response =>{
      for( let i=0; i < response.subjects.length; i++){
        this.subjectService.getSub(response.subjects[i].sname, response.subjects[i].scode)
        .subscribe(result => {
         this. subject = result.marks.filter(f => f.sid == this.authService.getUserId());
          this.subdata.push({sname:result.subname,marks:this.subject[0]});

        });
      }
    });

     }

  // students:any[]=[
  //   { 'Subject':'DS' , 'Test1':25 , 'CA1':10 , 'CA2':18 , 'PA1': 21 , 'Test2':15 , 'CA3':19 , 'CA4':13 , 'PA2': 19 },
  //   { 'Subject':'OS' , 'Test1':23 , 'CA1':18 , 'CA2':10 , 'PA1': 22 , 'Test2':15 , 'CA3':17 , 'CA4':12 , 'PA2': 23 },
  //   { 'Subject':'CA' , 'Test1':22 , 'CA1':12 , 'CA2':13 , 'PA1': 22 , 'Test2':20 , 'CA3':18 , 'CA4':15 , 'PA2': 20 },
  //   { 'Subject':'C++' , 'Test1':26 , 'CA1':10 , 'CA2':17 , 'PA1': 10 , 'Test2':22 , 'CA3':19 , 'CA4':10 , 'PA2': 20 },
  //   { 'Subject':'Maths' , 'Test1':20 , 'CA1':11 , 'CA2':18 , 'PA1': 20 , 'Test2':23 , 'CA3':19 , 'CA4':15 , 'PA2': 10 }
  // ];

  showGraph(i:number,CA1: string, Test1: string,  CA2: string, PCA1: string,CA3: string,
    Test2: string,  CA4: string, PCA2: string, FINAL:string){
      this.index = i;
    const dialogRef = this.dialogService.open(GraphdataComponent,{
      data :{CA1:CA1,Test1:Test1,CA2:CA2,PCA1:PCA1,CA3:CA3,Test2:Test2,CA4:CA4,PCA2:PCA2,FINAL:FINAL}
    });



    }





}


