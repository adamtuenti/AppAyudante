import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public user: Usuarios=new Usuarios();

  constructor(private usuarioService: UsuarioService,
              ) { }

  ngOnInit() {
    console.log(localStorage.getItem('userId'))

    this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => {this.user =res; console.log(res); console.log('aqui')});

  }

}