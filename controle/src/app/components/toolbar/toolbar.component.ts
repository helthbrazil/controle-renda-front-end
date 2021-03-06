import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'renda-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() title: string;
  itemSelecionado = 0;
  valorConta = ``;

  constructor(private router: Router) { }

  ngOnInit() {
    this.routeEvent(this.router);
    setTimeout(() => {
      this.valorConta = '1558,00';
    }, 1000);
  }

  routeEvent(router: Router) {

    router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        console.log(e);
        const url = e.url;
        this.atualizarIconeSelecionado(url);
      }
    });
  }

  private atualizarIconeSelecionado(url) {
    switch (url) {
      case '/':
      case '/dashboard':
        this.itemSelecionado = 1;
        break;

      case '/configuracao':
        this.itemSelecionado = 2;
        break;

      case '/cadastro':
        this.itemSelecionado = 3;
        break;

      case '/relatorio':
        this.itemSelecionado = 4;
        break;

      case '/info':
        this.itemSelecionado = 5;
        break;

      default:
        /* this.item = '/pessoa/detail'; */
        break;
    }
  }

}
