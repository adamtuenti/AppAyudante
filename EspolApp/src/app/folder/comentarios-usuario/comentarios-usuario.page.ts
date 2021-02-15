import { Component, OnInit } from '@angular/core';
import { Comentarios } from 'src/app/models/comentarios';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-comentarios-usuario',
  templateUrl: './comentarios-usuario.page.html',
  styleUrls: ['./comentarios-usuario.page.scss'],
})
export class ComentariosUsuarioPage implements OnInit {
  comentarios: Comentarios[]=[];
  textoBuscar='';
  idMateria: string;
  idAyudante: string;
  miID: string;
  usuarios:Usuarios[] = [];
  constructor(private activateRoute: ActivatedRoute,
              public comentariosService: ComentariosService,
              private usuarioService: UsuarioService,
              private alertCtrt: AlertController) { }

  ngOnInit() {
    this.miID = localStorage.getItem('userId')
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.idMateria = paramMap.get('idMateria');
      this.idAyudante = paramMap.get('idAyudante');
    });
    this.usuarioService.getUsuarios().subscribe(res => this.usuarios = res);
    this.comentariosService.getComentarios().subscribe(res =>{this.comentarios = res})
    
  }

  remove(id){
    this.comentariosService.removeComentario(id)
  }

} 
