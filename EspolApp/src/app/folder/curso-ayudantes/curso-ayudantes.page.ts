import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ayudantes } from 'src/app/models/ayudantes';
import { AyudantesService } from 'src/app/services/ayudantes.service';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-curso-ayudantes',
  templateUrl: './curso-ayudantes.page.html',
  styleUrls: ['./curso-ayudantes.page.scss'],
})
export class CursoAyudantesPage implements OnInit {

  usuarios:Usuarios[] = [];
  ayudantes:Ayudantes[] = [];
  nombreCurso: string;
  id:string;
  nombre:string;

  resultado = [];
  textoBuscar= '';
  constructor(private activateRoute: ActivatedRoute,
              private ayudanteService: AyudantesService,
              private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit() {

    this.activateRoute.paramMap.subscribe(paramMap => {
      console.log(paramMap)
      const idCurso = paramMap.get('id');
      const nombreCurso = paramMap.get('nombre');
      this.nombreCurso= nombreCurso;
     // const nombreCurso = paramMap.get('Nombre');
      this.id = idCurso;
     // this.nombre = nombreCurso;
      //this.actividadService.getActividad(idActividad).subscribe(res => this.actividad =res);
      
    });

    this.ayudanteService.getAyudantes().subscribe(res=> this.ayudantes = res);
    this.usuarioService.getUsuarios().subscribe(res => this.usuarios = res);
  }

  getDatos(){
    // this.ayudanteService.getAyudanteMateria(this.id).subscribe(res=> this.ayudantes = res);
    // console.log(this.ayudantes)

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

  aumentarVisita(id:string,ayudante:Ayudantes){
    ayudante.Visitas= ayudante.Visitas + 1
    //console.log("fff", publicacion.Visitas)
    //[routerLink]="['/curso-detalle-anuncio',publicacion.id]"
    this.ayudanteService.updateAyudante(id,ayudante)
   
      this.router.navigate(['/usuario-detalle',this.id,ayudante.Usuario]);
      console.log("ingreso")  
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }
 
}
