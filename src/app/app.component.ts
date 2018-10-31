import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dataSource = {
    "chart": {
       "caption": "Expense Analysis",
       "subCaption": "ACME Inc.",
       "xAxisname": "Region",
       "yAxisName": "Amount (In USD)",
       "numberPrefix": "$",
       "exportenabled": "1",
       "theme": "fusion"
    },
    "categories": [{
       "category": [{
          "label": "East"
       }, {
          "label": "West"
       }, {
          "label": "South"
       }, {
          "label": "North"
       }]
    }],
    "dataset": [{
       "seriesName": "Actual Expenses",
       "data": [{
          "value": "1441290"
       }, {
          "value": "855912"
       }, {
          "value": "911404"
       }, {
          "value": "648136"
       }]
    }, {
       "seriesName": "Budgeted Expenses",
       "renderAs": "line",
       "data": [{
          "value": "1297430"
       }, {
          "value": "776485"
       }, {
          "value": "685352"
       }, {
          "value": "726791"
       }]
    }]
 };
  
  constructor(){  
    
  }


  
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  // x
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  // y
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  // lineChart
  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40]
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';
 
  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  }

  //mixed

}
