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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToolbarComponent,
    PaddingDirective,
    ConfiguracaoComponent,
    CadastroComponent,
    RelatorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    InterceptorModule,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
