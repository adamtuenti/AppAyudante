import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Publicaciones } from '../models/publicaciones';
import { PublicacionesMateria } from '../models/publicaciones-materia';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

    private publicacionesCollection: AngularFirestoreCollection <Publicaciones>;
    private publicaciones: Observable<Publicaciones[]>;


    private publicacionesMateriaCollection: AngularFirestoreCollection <PublicacionesMateria>;
    private publicacionesMateria: Observable<PublicacionesMateria[]>;

    constructor(firestore: AngularFirestore) {
      this.publicacionesCollection = firestore.collection('PublicacionesGenerales');
      this.publicaciones = this.publicacionesCollection.snapshotChanges().pipe(map(
        actions =>{
          return actions.map( a=>{
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data}
          })
        }
      ))



      this.publicacionesMateriaCollection = firestore.collection('Publicaciones');
      this.publicacionesMateria = this.publicacionesMateriaCollection.snapshotChanges().pipe(map(
        actions =>{
          return actions.map( a=>{
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data}
          })
        }
      ))


    }
    getPublicaciones(){
      return this.publicaciones;
    }
    
    getPublicacion(id:string){
      return this.publicacionesCollection.doc<Publicaciones>(id).valueChanges();
    }


    getPublicacionesMateria(){
      return this.publicacionesMateria;
    }




}
