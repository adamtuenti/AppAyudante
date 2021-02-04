import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { gruposEstudios } from 'src/app/models/gruposEstudios.model';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-grupos-estudios',
  templateUrl: './grupos-estudios.page.html',
  styleUrls: ['./grupos-estudios.page.scss'],
})
export class GruposEstudiosPage implements OnInit {
  private gruposCollection: AngularFirestoreCollection <gruposEstudios>;
  private grupos: Observable<gruposEstudios[]>;
  profesor: string;

  constructor(firestore: AngularFirestore) { 
    this.profesor=localStorage.getItem('email');
    this.gruposCollection = firestore.collection('GruposEstudios');
    this. grupos = this.gruposCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map( a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      }
    ))
  }

  ngOnInit() {
  }

}
