import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'renda-grafico-gastos-mensal',
  templateUrl: './grafico-gastos-mensal.component.html',
  styleUrls: ['./grafico-gastos-mensal.component.css']
})
export class GraficoGastosMensalComponent implements OnInit {


  chart = new Chart({
    chart: {
      type: 'line'     
    },
    title: {
      text: 'Gastos 2019'
    },
    subtitle: {
      text: 'Controle de gastos mensal'
    },
    plotOptions: {
      column: {
        depth: 25
      }
    },
    xAxis: {
      categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
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
      name: 'Gastos',
      color: '#455a64',
      data: [3000, 3500, 3000, 3700, 3900, 4200, 4000, 5000, 4700, 5100, 6300],
      type: undefined
    }]
  });

  constructor() { }

  ngOnInit() {
  }

}
