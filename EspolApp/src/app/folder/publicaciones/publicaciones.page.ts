import { Component, OnInit } from '@angular/core';
import { PublicacionesMateria } from 'src/app/models/publicaciones-materia';
import { PublicacionesService } from 'src/app/services/publicaciones.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
})
export class PublicacionesPage implements OnInit {

  publicaciones: PublicacionesMateria[] = [];
  nombreCurso: string;
  miId:string;
  rol;
  textoBuscar='';

  constructor(private activateRoute: ActivatedRoute,
              private publicacionesService: PublicacionesService,
              private alertCtrt: AlertController,
              private router: Router) { }

  ngOnInit() {
    this.miId = localStorage.getItem('userId');
        
    this.rol = localStorage.getItem('Rol')

    this.publicacionesService.getPublicacionesMateria().subscribe(res=> this.publicaciones = res);
    
  } 

  redireccionar(id){
    this.router.navigate(['/editar-publicacion',id,"Publicacion"])
  }

  getDatos(){    
    for(let i= 0; i<this.publicaciones.length; i++){
      return false    
    }
      return true;
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

  aumentarVisita(id:string,publicacion:PublicacionesMateria){
    publicacion.Visitas= publicacion.Visitas + 1
    console.log("fff", publicacion.Visitas)
    //[routerLink]="['/curso-detalle-anuncio',publicacion.id]"
    this.publicacionesService.updatePublicacionesMateria(id,publicacion)
      this.router.navigate(['/curso-detalle-anuncio',publicacion.id]);
      console.log("ingreso")   
  }

  

  async alert(id) {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: "¿Desea eliminar esta publicación?",
    buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Elminar',
          handler: (data) => {
            this.remove(id)                  
          }
        }
      ]
    });
    await alert.present();
  }
  remove(id){
     this.publicacionesService.removePublicacionesMateria(id)
  }

}