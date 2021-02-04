import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
1
  constructor(private authService:AuthService,
              private router: Router,
              private alertCtrt: AlertController,
              firestore: AngularFirestore) { }

  ngOnInit() {
  }

  async RegistrarUser(form):Promise<void>{
    this.authService.signupnUser(form.value.email, form.value.password,form.value.nombre, form.value.apellido, form.value.rol).
    then(
      auth=>{
      if(form.value.rol == "profesor"){
        this.router.navigateByUrl("/grupos-estudios")
      }
      if(form.value.rol == "estudiante"){
        this.router.navigateByUrl("/grupos-estudios-estudiantes")
      }

      }
      
      
    ).catch(async error => {
      const alert = await this.alertCtrt.create({
        message: "Algo salio mal, intentelo de nuevo",
        buttons:[{text: 'ok', role: 'cancel'}],      
      });
      await alert.present();
    })
  }

}
