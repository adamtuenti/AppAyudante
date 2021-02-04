import { Component, OnInit } from '@angular/core';

import { Publicaciones } from 'src/app/models/publicaciones';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  publicaciones: Publicaciones[]=[];

  constructor(private publicacionesService: PublicacionesService) { }

  ngOnInit() {
    this.publicacionesService.getPublicaciones().subscribe(res => this.publicaciones = res);
  }

}
