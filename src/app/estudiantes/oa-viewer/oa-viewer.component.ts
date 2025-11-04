import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Resource } from '../recomendacion/tipos.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-oa-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oa-viewer.component.html',
  styleUrls: ['./oa-viewer.component.css']
})
export class OaViewerComponent implements OnInit {
  safeUrl!: SafeResourceUrl;
  displayType: 'video' | 'image' | 'document' | 'external' = 'external';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<OaViewerComponent>,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.displayType = this.detectType(this.data.objeto.contenido, 'external');
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.getEmbedUrl(this.data.objeto.contenido));
  }

  private detectType(url: string, providedType?: string): 'video' | 'image' | 'document' | 'external' {
    if (providedType && ['video', 'image', 'document', 'external'].includes(providedType)) {
      return providedType as 'video' | 'image' | 'document' | 'external';
    }

    if (url.match(/youtube\\.com|youtu\\.be/)) return 'external';
    if (url.match(/\\.(mp4|webm|ogg)$/i)) return 'video';
    if (url.match(/\\.(jpg|jpeg|png|gif|svg)$/i)) return 'image';
    if (url.match(/\\.(pdf|doc|docx)$/i) || url.includes('drive.google.com')) return 'document';

    return 'external';
  }

  private getEmbedUrl(url: string): string {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = new URL(url).searchParams.get('v');
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (url.includes('drive.google.com/file/d/')) {
      const fileId = url.split('/d/')[1].split('/')[0];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }

    return url;
  }

  close(): void {
    this.dialogRef.close();
  }

  async downloadFile(url: string, filename?: string) {
    try {
      // Petición del archivo como blob
      const response = await fetch(url, { mode: 'cors' });
      if (!response.ok) {
        throw new Error('No se pudo descargar el archivo');
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      // Crear enlace temporal
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = filename || this.extractFileName(url);
      document.body.appendChild(a);
      a.click();

      // Limpieza
      document.body.removeChild(a);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
      alert('No se pudo descargar el archivo. Verifica que el recurso esté disponible.');
    }
  }

  /** Extrae el nombre del archivo desde la URL */
  private extractFileName(url: string): string {
    const parts = url.split('/');
    const lastPart = parts[parts.length - 1];
    return decodeURIComponent(lastPart.split('?')[0]);
  }
}
