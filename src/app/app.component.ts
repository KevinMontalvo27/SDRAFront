import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from './estudiantes/sidebar/sidebar.component';
import { RecommendationService } from './services/recomendacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'P_TomaDeciciones';
  loggedUser!: string;
  units = this.recSrv.getUnits();

  constructor(private route: Router, private recSrv: RecommendationService) {}

  navigateInicio() {
    this.route.navigate(['/Inicio']);
  }

  loggedin() {
    return localStorage.getItem('info_alumno');
  }

  logout() {
    localStorage.removeItem('info_alumno');
    this.route.navigate(['/']);
  }
}
