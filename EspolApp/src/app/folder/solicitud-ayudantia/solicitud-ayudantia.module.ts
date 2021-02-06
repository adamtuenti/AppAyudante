import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudAyudantiaPageRoutingModule } from './solicitud-ayudantia-routing.module';

import { SolicitudAyudantiaPage } from './solicitud-ayudantia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudAyudantiaPageRoutingModule
  ],
  declarations: [SolicitudAyudantiaPage]
})
export class SolicitudAyudantiaPageModule {}
