import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicacionesMateriaPageRoutingModule } from './publicaciones-materia-routing.module';

import { PublicacionesMateriaPage } from './publicaciones-materia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicacionesMateriaPageRoutingModule
  ],
  declarations: [PublicacionesMateriaPage]
})
export class PublicacionesMateriaPageModule {}
