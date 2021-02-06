import { Component, OnInit } from '@angular/core';
import { Cursos } from 'src/app/models/cursos';
import { CursosService } from 'src/app/services/cursos.service';
import { Ayudantes } from 'src/app/models/ayudantes';
import { AyudantesService } from 'src/app/services/ayudantes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-ayudantia',
  templateUrl: './crear-ayudantia.page.html',
  styleUrls: ['./crear-ayudantia.page.scss'],
})
export class CrearAyudantiaPage implements OnInit {

  cursos: Cursos[]=[];
  miId; 
  ayudantias:Ayudantes[]= [];
  public nuevoAyudante: Ayudantes=new Ayudantes();

  constructor(private ayudanteService: AyudantesService,
              private cursoService: CursosService,
              private router: Router) { }

  ngOnInit() {

    this.ayudanteService.getAyudantes().subscribe(res => this.ayudantias = res);
    this.cursoService.getCursos().subscribe(res => this.cursos = res);
    this.miId = localStorage.getItem('userId');
    
  }


  crearAyudantia(idAyudantia:string){
    let data = {Visitas:0,Materia:idAyudantia,Usuario:this.miId}
    this.nuevoAyudante.Visitas = 0;
    this.nuevoAyudante.Materia = idAyudantia;
    this.nuevoAyudante.Usuario = this.miId;

                

    this.ayudanteService.addAyudante(this.nuevoAyudante).then(
      auth=>{
        //this.loading.dismiss();
        this.router.navigateByUrl("/mis-ayudantias")
      }       
    ).catch(async error => {
     // this.loading.dismiss();
      //this.failedAlert("Algo salió mal, inténtelo de nuevo");
    })

  }
}
