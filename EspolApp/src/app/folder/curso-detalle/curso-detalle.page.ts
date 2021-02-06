import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicacionesMateria } from 'src/app/models/publicaciones-materia';
import { PublicacionesService } from 'src/app/services/publicaciones.service';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.page.html',
  styleUrls: ['./curso-detalle.page.scss'],
})
export class CursoDetallePage implements OnInit {
  
  usuarios:Usuarios[] = [];
  publicaciones:PublicacionesMateria[] = [];
  nombreCurso: string;
  id:string;
  nombre:string;
  idEstudiante:string;
  textoBuscar = '';

  resultado = [];
  constructor(private activateRoute: ActivatedRoute,
              private publicacionesService: PublicacionesService,
              private usuarioService: UsuarioService,
              private router: Router,) { }

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

    this.publicacionesService.getPublicacionesMateria().subscribe(res=> this.publicaciones = res);
    this.usuarioService.getUsuarios().subscribe(res => this.usuarios = res);
  }

  getDatos(){
    // this.ayudanteService.getAyudanteMateria(this.id).subscribe(res=> this.ayudantes = res);
    // console.log(this.ayudantes)

    for(let i= 0; i<this.publicaciones.length; i++){
      if(this.publicaciones[i].Materia == this.id){
      
            return false;
          }
    }
    return true;


  }

  


  aumentarVisita(id:string,publicacion:PublicacionesMateria){
    publicacion.Visitas= publicacion.Visitas + 1
    console.log("fff", publicacion.Visitas)
    //[routerLink]="['/curso-detalle-anuncio',publicacion.id]"
    this.publicacionesService.updatePublicacionesMateria(id,publicacion)
   
      this.router.navigate(['/curso-detalle-anuncio',publicacion.id]);
      console.log("ingreso")
    
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

}
