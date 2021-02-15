import { Component, OnInit } from '@angular/core';
import { Comentarios } from 'src/app/models/comentarios';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-comentarios-usuario',
  templateUrl: './comentarios-usuario.page.html',
  styleUrls: ['./comentarios-usuario.page.scss'],
})
export class ComentariosUsuarioPage implements OnInit {
  comentarios: Comentarios[]=[];
  public comentario: Comentarios=new Comentarios();
  textoBuscar='';
  idMateria: string;
  id: string;
  miID: string;
  usuarios:Usuarios[] = [];
  constructor(private activateRoute: ActivatedRoute,
              public comentariosService: ComentariosService,
              private usuarioService: UsuarioService,
              private alertCtrt: AlertController) { }

  ngOnInit() {
    this.miID = localStorage.getItem('userId')
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.idMateria = paramMap.get('idMateria');
      this.id = paramMap.get('idAyudante');
    });
    console.log('ayudante: ',this.idAyudante)
    console.log('materia: ',this.idMateria)
    this.usuarioService.getUsuarios().subscribe(res => this.usuarios = res);
    this.comentariosService.getComentarios().subscribe(res =>this.comentarios = res);
    
  }
  async alert(id) {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: "¿Desea eliminar est comentario?",
    buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, 
        {
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
    this.comentariosService.removeComentario(id)
  }

  async crearComentario() {

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
              
              //this.failedAlert("El campo email es requerido");
            }
          }
        }
      ]
    });
    await alert.present();
  }

  agregarSolitiud(comentario:string){
    this.comentario.Ayudante = this.id;
    this.comentario.Estudiante = this.miID;
    this.comentario.Materia = this.idMateria;
    this.comentario.Comentario = comentario;
    this.comentariosService.addComentario(this.comentario);

  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

} 