import { Component, OnInit } from '@angular/core';
import { PublicacionesMateria } from 'src/app/models/publicaciones-materia';
import { PublicacionesService } from 'src/app/services/publicaciones.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Publicidad } from 'src/app/models/publicidad';
import { PublicidadService } from 'src/app/services/publicidad.service';



@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
})
export class PublicacionesPage implements OnInit {

  usuario: Usuarios = new Usuarios();
  publicaciones: PublicacionesMateria[] = [];
  nombreCurso: string;
  miId:string;
  rol;
  textoBuscar='';
  publicidad: Publicidad = new Publicidad();
  //probar: PublicacionesMateria[] = [];

  constructor(private activateRoute: ActivatedRoute,
              private usuarioService: UsuarioService,
              private publicacionesService: PublicacionesService,
              private alertCtrt: AlertController,
              private router: Router,
              private publicidadService: PublicidadService,
              ) { }

  ngOnInit() {
    this.usuarioService.getUsuario( localStorage.getItem('userId')).subscribe(res => this.usuario = res)
   
    this.miId = localStorage.getItem('userId');
        
    this.rol = localStorage.getItem('Rol')

    this.publicacionesService.getPublicacionesMateria().subscribe(res=> this.publicaciones = res);
    this.publicidadService.getPublicidad().subscribe(res=> {this.publicidad = res[0];console.log(res[0])});
    //this.publicacionesService.probar().subscribe(res=>this.probar = res);
 
    
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
    //console.log("fff", publicacion.Visitas)
    //[routerLink]="['/curso-detalle-anuncio',publicacion.id]"
    this.publicacionesService.updatePublicacionesMateria(id,publicacion)
      this.router.navigate(['/curso-detalle-anuncio',publicacion.id]);
      console.log("ingreso")   
  }

  aumentarVisitaPublicidad(id:string,publicidad:Publicidad){
    publicidad.Visitas= publicidad.Visitas + 1
    //console.log("fff", publicidad.Visitas)
    //[routerLink]="['/detalle-publicidad',publicacion.id]"
    this.publicidadService.updatePublicidad(id,publicidad)
    this.router.navigate(['/detalle-publicidad',publicidad.id]);
    console.log("ingreso")   
  }

  validarCurso(){
    if(this.usuario.Rol == 'Estudiante'){
      this.router.navigate(["/crear-publicacion-todos"])
    }

    else if((this.usuario.Premium) || (this.usuario.Premium == false && this.usuario.Publicaciones < 5)){
      this.router.navigate(["/crear-publicacion-todos"])
      // this.mostrarBoton = false;//mostrar mensaje.
      //  [routerLink]="['/crear-grupo',id]"
        
      


    }else{
      this.failedAlertPremium();


    }

    
  

  }

  async failedAlertPremium() {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: "Su cuenta no es premium",
     message: "Máximo puedes realizar 5 publicaciones",
    buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ser premium',
          handler: (data) => {
            this.serPremium()
            
            console.log('registrar')
          
          }
        }
      ]
    });
    await alert.present();
  }
  serPremium(){
    this.usuario.EsperaPremium = true;
    this.usuarioService.updateUsuario(localStorage.getItem('userId'),this.usuario)
      .then(res => {
        this.failedAlertPremiunMessage();
      });
  }
  async failedAlertPremiunMessage() {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: "Genial!",
     message: 'Pronto estaremos en contacto contigo por whatsapp!',
    buttons: [{
    text: 'OK',
      handler: () => {
        
      }
    }]   
    });
    await alert.present();
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
     this.usuario.Publicaciones = this.usuario.Publicaciones - 1;
     this.usuarioService.updateUsuario(this.miId,this.usuario)
  }

}