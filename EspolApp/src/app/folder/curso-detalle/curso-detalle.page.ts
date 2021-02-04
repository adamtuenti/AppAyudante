import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ayudantes } from 'src/app/models/ayudantes';
import { AyudantesService } from 'src/app/services/ayudantes.service';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.page.html',
  styleUrls: ['./curso-detalle.page.scss'],
})
export class CursoDetallePage implements OnInit {
  
  usuarios:Usuarios[] = [];
  ayudantes:Ayudantes[] = [];
  id:string;
  resultado = [];
  constructor(private activateRoute: ActivatedRoute,
              private ayudanteService: AyudantesService,
              private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.activateRoute.paramMap.subscribe(paramMap => {
      const idCurso = paramMap.get('id');
      this.id = idCurso;
      //this.actividadService.getActividad(idActividad).subscribe(res => this.actividad =res);
      
    });

    this.ayudanteService.getAyudantes().subscribe(res=> this.ayudantes = res);
    this.usuarioService.getUsuarios().subscribe(res => this.usuarios = res);
  }

  getDatos(){

    for(let i= 0; i<this.ayudantes.length; i++){
      if(this.ayudantes[i].Materia == this.id){
        for(let j= 0; j<this.usuarios.length; j++){
          if(this.usuarios[j].id == this.ayudantes[i].Usuario){
            return false;
          }
        }
      }
    }
    return true;


  }

}
