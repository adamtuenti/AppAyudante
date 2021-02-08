import { Component, OnInit } from '@angular/core';
import { Ayudantes } from 'src/app/models/ayudantes';
import { Cursos } from 'src/app/models/cursos';
import { AyudantesService } from 'src/app/services/ayudantes.service';

import { CursosService } from 'src/app/services/cursos.service';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mis-ayudantias',
  templateUrl: './mis-ayudantias.page.html',
  styleUrls: ['./mis-ayudantias.page.scss'],
})
export class MisAyudantiasPage implements OnInit {

  ayudantias:Ayudantes[]= [];
  cursos:Cursos[]= [];
  id;
  textoBuscar='';

  constructor(private ayudanteService: AyudantesService,
    private alertCtrt: AlertController,
    private cursosService: CursosService) { }

  ngOnInit() {
    console.log( localStorage.getItem("userId"))
    this.id = localStorage.getItem("userId")
    this.ayudanteService.getAyudantes().subscribe(res => this.ayudantias = res);
    this.cursosService.getCursos().subscribe(res => this.cursos = res);
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }
 
 


  async alert(id) {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: "¿Desea eliminar esta materia de sus ayudantias?",
    buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Elminar',
          handler: (data) => {
            this.remove(id)                  
          }
        }
      ]
    });
    await alert.present();
  }
  remove(id){
     this.ayudanteService.removeAyudante(id)
  }

  

}
