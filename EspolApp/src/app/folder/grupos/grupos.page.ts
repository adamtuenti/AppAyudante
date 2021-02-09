import { Component, OnInit } from '@angular/core';
import { Grupos } from 'src/app/models/grupos';
import { GruposService } from 'src/app/services/grupos.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.page.html',
  styleUrls: ['./grupos.page.scss'],
})
export class GruposPage implements OnInit {

  grupos: Grupos[]=[];
  textoBuscar='';
  userId;
  rol;
  idCurso;
  nombreCurso;
  id;

  constructor(private grupoService: GruposService,
              private alertCtrt: AlertController,
              private activateRoute: ActivatedRoute
              ) { }

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

    this.grupoService.getGrupos().subscribe(res => this.grupos = res);
    this.userId = localStorage.getItem('userId')
    this.rol = localStorage.getItem('Rol')
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

  // async crearGrupo() {

  //   const alert = await this.alertCtrt.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Sugerir curso:',
      
  //     // message: 'Nombre del curso:',
  //     inputs: [
  //       {
  //         name: 'curso',
  //         placeholder: 'Nombre del curso',
  //         type: 'text'
          
  //       }
  //     ],

  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: (blah) => {
  //          // console.log('Confirm Cancel: blah');
  //         }
  //       }, {
  //         text: 'Ok',
  //         handler: (data) => {
  //           if(data.curso != ""){
  //             this.agregarSolitiud(data.curso)
  //           }else if(data.curso== ""){
              
  //             // this.failedAlert("El campo email es requerido");
  //           }
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  // agregarSolitiud(curso:string){
  //   this.materia.Estado = true;
  //   this.materia.NombreMateria = curso;
  //   this.materia.Usuario = this.userId;
  //   this.materiaService.addMateria(this.materia);

  // }

}
