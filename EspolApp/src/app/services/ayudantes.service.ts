import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ayudantes } from '../models/ayudantes';

@Injectable({
  providedIn: 'root'
})
export class AyudantesService {

  private ayduantesCollection: AngularFirestoreCollection <Ayudantes>;
  private ayudantes: Observable<Ayudantes[]>;

  constructor(firestore: AngularFirestore) {
    this.ayudantesCollection = firestore.collection('Ayudantes');
    this.ayudantes = this.ayudantesCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map( a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      }
    ))
   }
  getAyudantes(){
    return this.ayudantes;
  }
  
  getAyudante(id:string){
    return this.ayudantesCollection.doc<Ayudantes>(id).valueChanges();
  }

  addAyudante(id:string, Ayudantes:Ayudantes){
    return this.ayudantesCollection.doc(id).set({...Ayudantes});
  }

  updateAyudante(id:string, Ayudantes:Ayudantes){
    return this.ayudantesCollection.doc(id).update({...Ayudantes});
  }

  removeAyudante(id:string){
    return this.ayudantesCollection.doc(id).delete();
 }
}