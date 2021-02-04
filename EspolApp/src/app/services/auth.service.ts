import { Injectable } from '@angular/core';
import { FirebaseAuth } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { rejects } from 'assert';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,
              private firestore: AngularFirestore) { }
  loginUser(email:string, password:string):Promise<firebase.auth.UserCredential>{
    
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signupnUser(email:string, password:string,nombre:string, apellido:string, rol:string):Promise<any>{
    
    return new Promise ((resolve, reject)=>{
      firebase.auth().createUserWithEmailAndPassword(email, password).then( res=>{ 
        localStorage.setItem('email', email);
        
        if(rol =="estudiante"){
        this.firestore.collection('Estudiantes').doc(res.user.uid).set({
          nombre: nombre,
          apellido: apellido,
          email:email
        });
        }
        if(rol =="profesor"){
          this.firestore.collection('Profesores').doc(res.user.uid).set({
            nombre: nombre,
            apellido: apellido,
            email:email
          });
          }


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