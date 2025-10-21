import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { LoginModule } from './login/login.module';
import { SidebarComponent } from './estudiantes/sidebar/sidebar.component';
import { CourseListComponent } from './estudiantes/lista-cursos/lista-cursos.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    EstudiantesModule,
    NgChartsModule,
    SidebarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
