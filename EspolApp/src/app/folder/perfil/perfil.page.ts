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
    console.log(localStorage.getItem('userId'))

    this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => {this.user =res; console.log(res); console.log('aqui')});

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

  async failedAlert() {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: "Felicidades por querer ser ayudante.",
     message: 'Pronto estaremos en contacto con usted.',
    buttons: [{
    text: 'OK',
      handler: () => {
        
      }
    }]   
    });
    await alert.present();
  }


}