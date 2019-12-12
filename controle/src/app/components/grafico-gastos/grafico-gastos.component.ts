import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'renda-grafico-gastos',
  templateUrl: './grafico-gastos.component.html',
  styleUrls: ['./grafico-gastos.component.css']
})
export class GraficoGastosComponent implements OnInit {

  chart = new Chart({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Gráfico de gastos Dezembro 2019'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Gasto',
        y: 78.00,
        sliced: false,
        selected: false,
        color: '#b71c1c'
      }, {
        name: 'Disponível',
        y: 22.00,
        color: '#1b5e20'
      }
      ],
      type: undefined,
    }]
  });

  constructor() { }

  ngOnInit() {
  }

}
