import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as Charts from 'fusioncharts/fusioncharts.charts';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
// Include Below Snippet
FusionChartsModule.fcRoot(FusionCharts,Charts, FusionTheme, Column2D, MSCombi2D);
// Load Charts module
import MSCombi2D from 'fusioncharts/viz/mscombi2d';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
