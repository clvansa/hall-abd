import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterailModule } from './module/materail/materail.module';
import { ResizableModule } from 'angular-resizable-element';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './component/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterailModule,
    ResizableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
