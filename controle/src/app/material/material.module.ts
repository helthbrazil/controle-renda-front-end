import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL COMPONENTS
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';

const modules = [MatTooltipModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule,
  MatSidenavModule, MatListModule, MatCardModule, MatBadgeModule, MatChipsModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports: [
    modules
  ]
})
export class MaterialModule { }
