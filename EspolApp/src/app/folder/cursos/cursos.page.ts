import { Component, OnInit } from '@angular/core';
import { Cursos } from 'src/app/models/cursos';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  cursos: Cursos[]=[];
  textoBuscar='';

  constructor(private cursoService: CursosService) { }

  ngOnInit() {

    this.cursoService.getCursos().subscribe(res => this.cursos = res);
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

}
