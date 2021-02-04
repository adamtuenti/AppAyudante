import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';


import { Publicaciones } from 'src/app/models/publicaciones';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.page.html',
  styleUrls: ['./crear-publicacion.page.scss'],
})
export class CrearPublicacionPage implements OnInit {
  public publicacion: Publicaciones=new Publicaciones();
  loading: any;
  constructor(
    private router: Router,
    private alertCtrt: AlertController,
    public loadingController: LoadingController,
    private publicacionesService: PublicacionesService) { }

  ngOnInit() {
  }

  crearPublicacion(form){
    this.presentLoading("Espere por favor...");
    var fechaActual = new Date();
    this.publicacion.Titulo = form.value.titulo
    this.publicacion.Descripcion = form.value.descripcion
    this.publicacion.Estudiante = localStorage.getItem('userId')
    this.publicacion.Fecha = fechaActual.toString();


    this.publicacionesService.addPublicaciones(this.publicacion).then(
      auth=>{
        this.loading.dismiss();
        this.router.navigateByUrl("/publicaciones")
      }       
    ).catch(async error => {
      this.loading.dismiss();
      this.failedAlert("Algo salió mal, inténtelo de nuevo");
    })

  }

  async presentLoading(mensaje: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: mensaje,
      //duration: 2000
    });
    return this.loading.present();
  }
  
  async failedAlert(text: string) {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: text,
    buttons: [{
    text: 'OK',
      handler: () => {
        
      }
    }]   
    });
    await alert.present();
  }

}
