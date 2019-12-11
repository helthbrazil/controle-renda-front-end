import { Component, OnInit } from '@angular/core';
import { CepService } from './shared/services/cep.service';

@Component({
  selector: 'renda-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Controle de Renda';

  constructor() { }

  ngOnInit(): void {

  }

}
