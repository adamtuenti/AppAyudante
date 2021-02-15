import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisComentariosPageRoutingModule } from './mis-comentarios-routing.module';

import { MisComentariosPage } from './mis-comentarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisComentariosPageRoutingModule
  ],
  declarations: [MisComentariosPage]
})
export class MisComentariosPageModule {}
