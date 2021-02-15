import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComentariosUsuarioPageRoutingModule } from './comentarios-usuario-routing.module';

import { ComentariosUsuarioPage } from './comentarios-usuario.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ComentariosUsuarioPageRoutingModule
  ],
  declarations: [ComentariosUsuarioPage]
})
export class ComentariosUsuarioPageModule {}
