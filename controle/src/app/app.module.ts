import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { PaddingDirective } from './shared/directives/padding.directive';
import { ConfiguracaoComponent } from './pages/configuracao/configuracao.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { RelatorioComponent } from './pages/relatorio/relatorio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from './shared/modules/interceptor/interceptor.module';

// Charts
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting.src';
import highcharts3D from 'highcharts/highcharts-3d.src';

import { GraficoGastosComponent } from './components/grafico-gastos/grafico-gastos.component';
import { GraficoGastosMensalComponent } from './components/grafico-gastos-mensal/grafico-gastos-mensal.component';
import { TabelaGastosComponent } from './components/tabela-gastos/tabela-gastos.component';
import { GraficoTipoComponent } from './components/grafico-tipo/grafico-tipo.component';
import { InfoComponent } from './pages/info/info.component';
import { GraficoTesteComponent } from './components/grafico-teste/grafico-teste.component';

export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [highcharts3D , exporting ];
 }

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToolbarComponent,
    PaddingDirective,
    ConfiguracaoComponent,
    CadastroComponent,
    RelatorioComponent,
    GraficoGastosComponent,
    GraficoGastosMensalComponent,
    TabelaGastosComponent,
    GraficoTipoComponent,
    InfoComponent,
    GraficoTesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    InterceptorModule,
    ChartModule,
    NgProgressModule.withConfig({
      trickleSpeed: 200,
      min: 20,
      spinner: false,
      color: '#f5f5f5',
      meteor: false
    }),
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
