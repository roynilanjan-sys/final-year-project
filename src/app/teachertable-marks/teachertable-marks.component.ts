import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { NgForm,FormControl, Validators } from '@angular/forms';
import { MatDialog,MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SubjectService} from '../subject.service';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MatPaginator } from '@angular/material/paginator';
import { GraphdataComponent } from '../graphdata/graphdata.component';


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
  id: string;
  exampleDatabase: any;
  res: any;
  teacher:any[];
  final:any[];
  marksFinal:any;
  @ViewChild('userForm') userForm:NgForm;
  constructor(public dialogService: MatDialog, public subjectService: SubjectService, private route: ActivatedRoute) {

  }

 // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.final = [];
      this.subjectService.getSubject(this.id)
    .subscribe(response =>{
      this.res = response;
       this.teacher = response.marks;
       this.teacher.sort(function(a, b){
         return a.sroll - b.sroll;
       });
    });


    });
    // this.teacher = [
    //   { 'Name':'Anirban Pal' , 'Roll':1 , 'CA1':10,'Test1':25 ,  'CA2':18 , 'PA1': 21 , 'CA3':19 ,'Test2':15 ,  'CA4':13 , 'PA2': 19 },
    //   { 'Name':'Ananway Ghatak' , 'Roll':2 , 'CA1':18 ,'Test1':23 ,  'CA2':10 , 'PA1': 22 , 'CA3':17 ,'Test2':15 ,  'CA4':12 , 'PA2': 23 },
    //   { 'Name':'Akash Bose' , 'Roll':3 , 'CA1':12 ,'Test1':22 ,  'CA2':13 , 'PA1': 22 , 'CA3':18 ,'Test2':20 ,  'CA4':15 , 'PA2': 20 },
    //   { 'Name':'Chandradip Panja' , 'Roll':4 , 'CA1':10 ,'Test1':26 ,  'CA2':17 , 'PA1': 10 , 'CA3':19 ,'Test2':22 ,  'CA4':10 , 'PA2': 20 },
    //   { 'Name':'Nilanjan Roy' , 'Roll':5 , 'CA1':11 ,'Test1':20 ,  'CA2':18 , 'PA1': 20 , 'CA3':19 ,'Test2':23 ,  'CA4':15 , 'PA2': 10 }
    // ];



  }



onEdit( i:number, _id:string, sid:string, Name: string, Roll: string,CA1: number, Test1: number,  CA2: number, PCA1: number,CA3: number,
  Test2: number,  CA4: number, PCA2: number){
  this.index = i;
  if(CA1 >=0 && CA2 >=0 && CA3 >=0 && CA4 >=0){
  var t = Math.round((CA1 + CA2 + CA3 + CA4)*0.3);
  }
  else{
    t=0;
  }
  this.Roll = Roll;
  const dialogRef = this.dialogService.open(EditDialogComponent,{
    data :{_id:_id,sid:sid,sname:Name,sroll:Roll,ca1:CA1,test1:Test1,ca2:CA2,pca1:PCA1,ca3:CA3,test2:Test2,ca4:CA4,pca2:PCA2,final:t}
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 1) {
      // When using an edit things are little different, firstly we find record inside DataService by id
      const foundIndex = this.index;
      // Then you update that record using data from dialogData (values you enetered)
      this.teacher[foundIndex] = this.subjectService.getDialogData();
     this.subjectService.updateData(this.res._id,this.res.subname,this.res.subcode,this.teacher);
      // And lastly refresh table
      //this.refreshTable();
    }
  });

}

showGraph(i:number, Name: string, Roll: string,CA1: string, Test1: string,  CA2: string, PCA1: string,CA3: string,
  Test2: string,  CA4: string, PCA2: string){
    this.index = i;
  this.Roll = Roll;
  const dialogRef = this.dialogService.open(GraphdataComponent,{
    data :{Name:Name,Roll:Roll,CA1:CA1,Test1:Test1,CA2:CA2,PCA1:PCA1,CA3:CA3,Test2:Test2,CA4:CA4,PCA2:PCA2}
  });



  }




/*private refreshTable() {
  this.paginator._changePageSize(this.paginator.pageSize);
}
*/
}
