import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarios';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

//import {EmailComposer, EmailComposerOptions} from "@ionic-native/email-composer/ngx";

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.page.html',
  styleUrls: ['./usuario-detalle.page.scss'],
})




export class UsuarioDetallePage implements OnInit {

  


  usuario:Usuarios[] = [];
  id:string;
  constructor(private activateRoute: ActivatedRoute,
              private usuarioService: UsuarioService,
              //private emailComposer: EmailComposer
              ) { }

  ngOnInit() {

    this.activateRoute.paramMap.subscribe(paramMap => {
      const idUsuario = paramMap.get('id');
      this.id = idUsuario;
     // this.actividadService.getActividad(idActividad).subscribe(res => this.actividad =res);
      
    });


    this.usuarioService.getUsuario(this.id).subscribe(res => {this.usuario = res; console.log('aui')});

  

  let email = {
  to: 'adanavarrete15@gmail.com',
  cc: 'hwong@espol.edu.ec',
  bcc: ['john@doe.com', 'jane@doe.com'],
  attachments: [
    
  ],
  subject: 'Cordova Icons',
  body: 'How are you? Nice greetings from Leipzig',
  isHtml: true
}

// Send a text message using default options
// this.emailComposer.open(email);

}
}