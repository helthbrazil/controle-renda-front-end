import { Component, OnInit } from '@angular/core';
import { CepService } from '../../shared/services/cep.service';

@Component({
  selector: 'renda-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.css']
})
export class ConfiguracaoComponent implements OnInit {

  mostrarPorcentagem = { mostrar: false };
  porcentagemComprometimentoAlerta = { percentual: 50 };
  nomeUsuario = 'Hebert Ferreira';

  constructor(private cepService: CepService) { }

  ngOnInit() {
    this.buscarCep();
  }

  public buscarCep() {
    this.cepService.buscarCep('32223080').subscribe(res => {
      console.log(res);
    }, err => {
      console.error(err);
    });
  }

  toogle() {
    this.mostrarPorcentagem.mostrar = !this.mostrarPorcentagem.mostrar;
  }

  formatLabel(value: number) {
    return Math.round(value) + '%';
  }

}
