import { Injectable } from '@angular/core';
import { FirebaseAuth } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { rejects } from 'assert';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { UsuarioService } from './usuario.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,
              private firestore: AngularFirestore,
              private usuarioService: UsuarioService) { }
  loginUser(email:string, password:string):Promise<firebase.auth.UserCredential>{
    
    return new Promise ((resolve, reject)=>{ 
      firebase.auth().signInWithEmailAndPassword(email, password).then( res=>{ 
        localStorage.setItem('email', email);
        localStorage.setItem('userId', res.user.uid);

        this.usuarioService.getUsuario(res.user.uid).subscribe(res => {
          localStorage.setItem('Rol',res.Rol);
          localStorage.setItem('Estado',res.Estado);
        
        });

      resolve(res);   
      }).catch(err => reject(err))
    })
  }

  signupnUser(email:string, password:string,nombre:string, apellido:string, matricula: string, telefono: string, fotoPerfil: string, fotoCarnet: string):Promise<any>{
    
    return new Promise ((resolve, reject)=>{
      firebase.auth().createUserWithEmailAndPassword(email, password).then( res=>{ 
        
        
      
        this.firestore.collection('Usuarios').doc(res.user.uid).set({
          Apellido: apellido,
          Correo: email,
          FotoPerfil: fotoPerfil,
          Foto: fotoCarnet,
          Matricula: matricula,
          Nombre: nombre,
          Premium: false,
          Publicaciones: 0,
          Rol: 'Estudiante',
          Telefono: telefono,
          Universidad: 'Espol',
          Anuncio: true,
          EsperaAyudantia: false,
          EsperaPremium: false,
          Cursos:0,
         // Verificacion: false,
          Estado: 'P',

        });
    
       


      resolve(res);
         
      }).catch(err => reject(err))
    });  
  }

  resetPassword(email:string):Promise<void>{
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logOutUser(){
     firebase.auth().signOut().then(
      ()=> 
      (localStorage.clear(),
      this.router.navigateByUrl("/login"))
    );
  }

}