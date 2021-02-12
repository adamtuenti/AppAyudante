import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public user: Usuarios=new Usuarios();
  file: File;
  constructor(private usuarioService: UsuarioService,
              private alertCtrt: AlertController,
              private authService:AuthService
              ) { }

  ngOnInit() {
  
    this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => {this.user =res;});

  }

  logOutUser(){
    this.authService.logOutUser();
  }

  serAyudante(){
    this.user.EsperaAyudantia = true;
    this.usuarioService.updateUsuario(localStorage.getItem('userId'),this.user)
      .then(res => {
        this.failedAlert();
      });
  }

  serPremium(){
    this.user.EsperaPremium = true;
    this.usuarioService.updateUsuario(localStorage.getItem('userId'),this.user)
      .then(res => {
        this.failedAlert();
      });
  }

  async failedAlert() {
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


}