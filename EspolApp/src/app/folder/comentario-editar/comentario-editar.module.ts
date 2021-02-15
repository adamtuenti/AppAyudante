import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComentarioEditarPageRoutingModule } from './comentario-editar-routing.module';

import { ComentarioEditarPage } from './comentario-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComentarioEditarPageRoutingModule
  ],
  declarations: [ComentarioEditarPage]
})
export class ComentarioEditarPageModule {}
