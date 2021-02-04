import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Publicaciones } from '../models/publicaciones';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

    private publicacionesCollection: AngularFirestoreCollection <Publicaciones>;
    private publicaciones: Observable<Publicaciones[]>;

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
    }
    getPublicaciones(){
      console.log('aca')
      return this.publicaciones;
    }
    
    getPublicacion(id:string){
      return this.publicacionesCollection.doc<Publicaciones>(id).valueChanges();
    }




}
