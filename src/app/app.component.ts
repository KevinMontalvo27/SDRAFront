import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from './estudiantes/sidebar/sidebar.component';
import { RecommendationService } from './services/recomendacion.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'P_TomaDeciciones';
  loggedUser!: string;
  nombre_usuario$!: string;
  grupo$!: string;

  constructor
  (private route: Router,
    private recSrv: RecommendationService,
    public translate: TranslateService
  ) {
        // Configurar idiomas disponibles
    translate.addLangs(['es', 'en']);

    // Idioma por defecto
    translate.setDefaultLang('es');

    // Usar idioma guardado o español
    const savedLang = localStorage.getItem('lang') || 'es';
    translate.use(savedLang);
  }

  ngOnInit() {
    const info_alumno = localStorage.getItem('info_alumno');
    if (info_alumno) {
      const { nombre} = JSON.parse(info_alumno);
      this.nombre_usuario$ = nombre;
      this.grupo$ = JSON.parse(info_alumno).grupo;
    }
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
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
