import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { MensajeErrorService } from 'src/app/services/mensaje-error.service';


@Component({
  selector: 'app-perfil-update',
  templateUrl: './perfil-update.page.html',
  styleUrls: ['./perfil-update.page.scss'],
})
export class PerfilUpdatePage implements OnInit {

  public user: Usuarios=new Usuarios();
  public image;
  file: File;
  loading: HTMLIonLoadingElement;

  constructor(private usuarioService: UsuarioService,
              private angularFireStorage: AngularFireStorage,
              public loadingController: LoadingController,
              private router: Router,
              private alertCtrt: AlertController,
              private mensajeErrorService: MensajeErrorService,
              ) { }

  ngOnInit() {


    this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => {this.user =res; this.image=res.FotoPerfil;});

  }

  async presentLoading(mensaje: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: mensaje,
      //duration: 2000
    });
    return this.loading.present();
  }


  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
        this.file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.image = reader.result;

        reader.readAsDataURL(this.file);
    }
  }


  async UpdateUser(form):Promise<void>{
   // this.presentLoading("Espere por favor...");
   this.presentLoading("Espere por favor...");
    var telefono = form.value.telefono;
    if(telefono.length==10){
      telefono = '+593' + telefono.slice(1,telefono.length);
    }

    
    // if(this.file!='null'){
    //   this.guardarArchivo(telefono);
    // }
    // else{
      this.UpdateUserCompleto(telefono,this.image)
    // }
    
  }

  guardarArchivo(telefono: string){
    //this.presentLoading("Espere por favor...");
    
    var storageRef = this.angularFireStorage.storage.ref()

    
    storageRef.child(this.file.name).put(this.file)
    .then(
            data=>{
                    data.ref.getDownloadURL().then(
                        downloadURL => {
                          this.UpdateUserCompleto(telefono, downloadURL)

                      
                        }
                    ).catch(err=>{this.loading.dismiss(), this.failedAlert("Error al cargar la foto de perfil, intentelo de nuevo")});
                    

            }
    )     


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

 

  
  async UpdateUserCompleto(telefono: string, downloadURL:string){
    this.user.Telefono = telefono;
    this.user.FotoPerfil = downloadURL;
    var userId = localStorage.getItem('userId')
    this.usuarioService.updateUsuario(userId, this.user).
    then(
      auth=>{
        this.loading.dismiss();
        
        this.router.navigateByUrl("/perfil")
       
       
      }  
    ).catch(async error => {
      this.loading.dismiss();
      var mensaje=error.code.split('/')[1];
      const presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
      this.failedAlert(presentarMensaje)
    })
  }



}
