import { Component, OnInit } from '@angular/core';
import { Cursos } from 'src/app/models/cursos';
import { CursosService } from 'src/app/services/cursos.service';
import { AlertController } from '@ionic/angular';
import { MateriaSolicitud } from 'src/app/models/materia-solicitud';
import { MateriaSolicitudService } from 'src/app/services/materia-solicitud.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  cursos: Cursos[]=[];
  textoBuscar='';
  userId;
  materia : MateriaSolicitud = new MateriaSolicitud();

  constructor(private cursoService: CursosService,
              private alertCtrt: AlertController,
              public materiaService: MateriaSolicitudService) { }

  ngOnInit() {

    this.cursoService.getCursos().subscribe(res => this.cursos = res);
    this.userId = localStorage.getItem('userId')
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

  async crearCurso() {

    const alert = await this.alertCtrt.create({
      cssClass: 'my-custom-class',
      header: 'Sugerir curso:',
      
      // message: 'Nombre del curso:',
      inputs: [
        {
          name: 'curso',
          placeholder: 'Nombre del curso',
          type: 'text'
          
        }
      ],

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
           // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            if(data.curso != ""){
              this.agregarSolitiud(data.curso)
            }else if(data.curso== ""){
              
              // this.failedAlert("El campo email es requerido");
            }
          }
        }
      ]
    });
    await alert.present();
  }

  agregarSolitiud(curso:string){
    this.materia.Estado = true;
    this.materia.NombreMateria = curso;
    this.materia.Usuario = this.userId;
    this.materiaService.addMateria(this.materia);

  }

}
