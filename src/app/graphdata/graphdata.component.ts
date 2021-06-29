import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import CanvasJS from '../canvasjs.min';
import { SubjectService } from '../subject.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-graphdata',
  templateUrl: './graphdata.component.html',
  styleUrls: ['./graphdata.component.css']
})
export class GraphdataComponent implements OnInit {

  @Input() dataa:any;
  username="";

  constructor(private authService: AuthService, public dialogRef: MatDialogRef<GraphdataComponent>,
    @Inject(MAT_DIALOG_DATA) public gdata: any, public subjectService: SubjectService) { }

  ngOnInit(): void {



    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Continuous Assessment Data"
      },
      axisY:{
           minimum: 0,
           maximum: 35,
           interval:5,
           stripLines:[
            {
                  value: 10,
                label: "Pass Margin"
            },
            {
              value:25,
              label:"Full Marks"
            }
          ]
          },
      data: [{
        type: "line",
        lineThickness: 3,
        lineDashType: "solid",
        markerType: "cross",
        markerSize: 10,
        dataPoints: [
          { y: this.gdata.CA1 , label: "CA1" },
        //  { y: this.gdata.Test1, label: "TEST1" },
          { y: this.gdata.CA2, label: "CA2" },
        //  { y: this.gdata.PCA1, label: "PCA1" },
          { y: this.gdata.CA3, label: "CA3" },
        //  { y: this.gdata.Test2, label: "TEST2" },
          { y: this.gdata.CA4, label: "CA4" },
        //  { y: this.gdata.PCA2, label: "PCA2" },
        ]
      }]
    });

    chart.render();

    let chart1 = new CanvasJS.Chart("chart1Container", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Practical Marks Data"
      },
      axisY:{
           minimum: 0,
           maximum: 45,
           interval:8,
           stripLines:[
            {
                  value: 16,
                label: "Pass Margin"
            },
            {
              value:40,
              label:"Full Marks"
            }
          ]
          },
      data: [{
        type: "line",
        lineThickness: 3,
        lineDashType: "solid",
        markerType: "cross",
        markerSize: 10,
        dataPoints: [
        //  { y: this.gdata.CA1 , label: "CA1" },
        //  { y: this.gdata.Test1, label: "TEST1" },
        //  { y: this.gdata.CA2, label: "CA2" },
          { y: this.gdata.PCA1, label: "PCA1" },
        //  { y: this.gdata.CA3, label: "CA3" },
        //  { y: this.gdata.Test2, label: "TEST2" },
         // { y: this.gdata.CA4, label: "CA4" },
          { y: this.gdata.PCA2, label: "PCA2" },
        //  { y: this.gdata.FINAL, label: "FINAL" },
        ]
      }]
    });

    chart1.render();

  }

}
