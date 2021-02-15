import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComentarioCrearPageRoutingModule } from './comentario-crear-routing.module';

import { ComentarioCrearPage } from './comentario-crear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComentarioCrearPageRoutingModule
  ],
  declarations: [ComentarioCrearPage]
})
export class ComentarioCrearPageModule {}
