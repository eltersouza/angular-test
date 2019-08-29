import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './shared/material/material.module';
import { ToolbarComponent } from './dashboard/toolbar/toolbar.component';
import { GridComponent } from './dashboard/grid/grid.component';
import { ToolbarItemComponent } from './dashboard/toolbar/toolbar-item/toolbar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToolbarComponent,
    GridComponent,
    ToolbarItemComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
