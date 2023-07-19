import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { AlumnsManagerComponent } from './components/alumns/alumns-manager/alumns-manager.component';
import { ClassesManagerComponent } from './components/classes/classes-manager/classes-manager.component';
import { CoursesManagerComponent } from './components/courses/courses-manager/courses-manager.component';
import { AlumnsGridComponent } from './modules/alumns/alumns-grid/alumns-grid.component';
import { ClassesGridComponent } from './modules/classes/classes-grid/classes-grid.component';
import { CoursesGridComponent } from './modules/courses/courses-grid/courses-grid.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AlumnsManagerComponent,
    ClassesManagerComponent,
    CoursesManagerComponent,
    AlumnsGridComponent,
    ClassesGridComponent,
    CoursesGridComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
