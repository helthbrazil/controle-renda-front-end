import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'renda-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.css']
})
export class ConfiguracaoComponent implements OnInit {

  mostrarPorcentagem = { mostrar: false };
  porcentagemComprometimentoAlerta = { percentual: 50 };
  nomeUsuario = 'Hebert Ferreira';

  constructor() { }

  ngOnInit() {
  }

  toogle() {
    this.mostrarPorcentagem.mostrar = !this.mostrarPorcentagem.mostrar;
  }

  formatLabel(value: number) {
    return Math.round(value) + '%';
  }

}
