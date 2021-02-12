import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Sugerencias } from 'src/app/models/sugerenicas';
import {AngularFireStorage} from 'angularfire2/storage';
import { SugerenciaService } from 'src/app/services/sugerencia.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.page.html',
  styleUrls: ['./sugerencias.page.scss'],
})
export class SugerenciasPage implements OnInit {
  public sugerencia: Sugerencias=new Sugerencias();
  constructor(private angularFireStorage: AngularFireStorage,
    private router: Router,
    private alertCtrt: AlertController,
    public loadingController: LoadingController,
    private sugerenciaService: SugerenciaService) { }

  ngOnInit() {
  }

  enviarSugerencia(form){
    this.sugerencia.Titulo = form.value.titulo;
    this.sugerencia.Detalle = form.value.descripcion;
    this.sugerencia.Visibilidad =true;
    this.sugerencia.Usuario = localStorage.getItem('userId')
    this.sugerencia.Telefono = localStorage.getItem('Telefono');
    this.sugerenciaService.addSugerencias(this.sugerencia)
      .then( res => {this.failedAlert()})
      .catch()
  }

  async failedAlert() {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: "Gracias por su sugerencia!",
    //  message: "Su sugerencia la tomaremos en cuenta en una nueva actualización.",
    buttons: [{
    text: 'OK',
      handler: () => {
        this.router.navigateByUrl("/perfil")
      }
    }]   
    });
    await alert.present();
  }
}
