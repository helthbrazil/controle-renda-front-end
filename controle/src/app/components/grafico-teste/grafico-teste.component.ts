import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'renda-grafico-teste',
  templateUrl: './grafico-teste.component.html',
  styleUrls: ['./grafico-teste.component.css']
})
export class GraficoTesteComponent implements OnInit {

  constructor() { }

  chart = new Chart({
    chart: {
      type: 'column',
      options3d: {
          enabled: true,
          alpha: 7,
          beta: -17,
          depth: 43
      }
  },
  title: {
      text: '3D chart with null values'
  },
  subtitle: {
      text: 'Notice the difference between a 0 value and a null point'
  },
  plotOptions: {
      column: {
          depth: 25
      }
  },
  xAxis: {
      categories: Highcharts.getOptions().lang.shortMonths,
      labels: {
          skew3d: true,
          style: {
              fontSize: '16px'
          }
      }
  },
  yAxis: {
      title: {
          text: null
      }
  },
  series: [{
      name: 'Sales',
      data: [2, 3, null, 4, 0, 5, 1, 4, 6, 3],
      type: undefined
  }]
  });

  ngOnInit() {
  }

}
