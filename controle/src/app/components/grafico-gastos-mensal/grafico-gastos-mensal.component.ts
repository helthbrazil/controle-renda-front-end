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
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 10,
        beta: 25,
        depth: 70
      }
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
      name: 'Gasto',
      data: [2, 3, 0, 4, 0, 5, 1, 4, 6, 3, 10],
      type: undefined
    }]
  });

  constructor() { }

  ngOnInit() {
  }

}
