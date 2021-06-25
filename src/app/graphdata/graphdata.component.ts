import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import CanvasJS from '../canvasjs.min';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-graphdata',
  templateUrl: './graphdata.component.html',
  styleUrls: ['./graphdata.component.css']
})
export class GraphdataComponent implements OnInit {

  @Input() dataa:any;

  constructor(public dialogRef: MatDialogRef<GraphdataComponent>,
    @Inject(MAT_DIALOG_DATA) public gdata: any, public subjectService: SubjectService) { }

  ngOnInit(): void {

    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Marks Data"
      },
      axisY:{
           minimum: 0,
           maximum: 30,
           stripLines:[
            {                
                  value: 12,
                label: "Pass Margin"
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
          { y: this.gdata.Test1, label: "Test1" },
          { y: this.gdata.CA2, label: "CA2" },
          { y: this.gdata.PA1, label: "PA1" },
          { y: this.gdata.CA3, label: "CA3" },
          { y: this.gdata.Test2, label: "Test2" },
          { y: this.gdata.CA4, label: "CA4" },
          { y: this.gdata.PA2, label: "PA2" },
        ]
      }]
    });
      
    chart.render();

  }

}
