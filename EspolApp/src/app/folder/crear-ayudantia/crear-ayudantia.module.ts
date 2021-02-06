import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearAyudantiaPageRoutingModule } from './crear-ayudantia-routing.module';

import { CrearAyudantiaPage } from './crear-ayudantia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearAyudantiaPageRoutingModule
  ],
  declarations: [CrearAyudantiaPage]
})
export class CrearAyudantiaPageModule {}
