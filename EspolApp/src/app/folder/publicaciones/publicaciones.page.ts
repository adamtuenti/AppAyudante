import { Component, OnInit } from '@angular/core';
import { Publicaciones } from 'src/app/models/publicaciones';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
})
export class PublicacionesPage implements OnInit {

  publicaciones: Publicaciones[]=[];

  constructor(private publicacionesService: PublicacionesService) { }

  ngOnInit() {

    this.publicacionesService.getPublicaciones().subscribe(res => this.publicaciones = res);
  }

}