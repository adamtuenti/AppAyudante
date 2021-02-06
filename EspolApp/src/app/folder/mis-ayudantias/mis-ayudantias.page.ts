import { Component, OnInit } from '@angular/core';
import { Ayudantes } from 'src/app/models/ayudantes';
import { Cursos } from 'src/app/models/cursos';
import { AyudantesService } from 'src/app/services/ayudantes.service';

import { CursosService } from 'src/app/services/cursos.service';


@Component({
  selector: 'app-mis-ayudantias',
  templateUrl: './mis-ayudantias.page.html',
  styleUrls: ['./mis-ayudantias.page.scss'],
})
export class MisAyudantiasPage implements OnInit {

  ayudantias:Ayudantes[]= [];
  cursos:Cursos[]= [];
  id;

  constructor(private ayudanteService: AyudantesService,
  private cursosService: CursosService) { }

  ngOnInit() {
    console.log( localStorage.getItem("userId"))
    this.id = localStorage.getItem("userId")
    this.ayudanteService.getAyudantes().subscribe(res => this.ayudantias = res);
    this.cursosService.getCursos().subscribe(res => this.cursos = res);
  }

  

}
