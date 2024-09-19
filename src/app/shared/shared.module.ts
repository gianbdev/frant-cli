import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModule } from './material.module';
/*
import { NgxBootstrapModule } from './ngx-bootstrap/ngx-bootstrap.module';
import { CountUpModule } from 'ngx-countup';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxEditorModule } from 'ngx-editor';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DataService } from './data/data.service';
*/
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatTableModule } from '@angular/material/table';
//import { TablaModule } from '../common-component/tabla/tabla.module';
//import { HistoricalTableModule } from '../core/patient/historia-paciente/components/historical-table/historical-table.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    MatTableModule,
    materialModule,
    /*
    NgxBootstrapModule,

    NgCircleProgressModule.forRoot({
      radius: 40,
      space: -10,
      outerStrokeWidth: 10,
      innerStrokeWidth: 10,
      animationDuration: 1000,
      clockwise: false,
      startFromZero: false,
      lazy: false,
      outerStrokeLinecap: 'square',
      showSubtitle: false,
      showTitle: false,
      showUnits: false,
      showBackground: false,
    }),
    CountUpModule,
    NgApexchartsModule,
    NgxEditorModule,
    SlickCarouselModule,
    FullCalendarModule,
    NgxMaterialTimepickerModule,
    TablaModule,*/
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    MatTableModule,
    /*
    CountUpModule,
    NgxBootstrapModule,
    NgCircleProgressModule,
    NgApexchartsModule,
    NgxEditorModule,
    SlickCarouselModule,
    FullCalendarModule,
    */
    materialModule,
    //NgxMaterialTimepickerModule,
    //TablaModule,
  ],
  //providers: [DataService],
})
export class SharedModule {}
