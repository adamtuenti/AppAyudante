import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {
  actividades: Observable<any[]>;
  constructor(firestore: AngularFirestore) { 
    this.actividades = firestore.collection('actividades').valueChanges();
  }
  ngOnInit() {
  }

}
