import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoDetalleAnuncioPageRoutingModule } from './curso-detalle-anuncio-routing.module';

import { CursoDetalleAnuncioPage } from './curso-detalle-anuncio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoDetalleAnuncioPageRoutingModule
  ],
  declarations: [CursoDetalleAnuncioPage]
})
export class CursoDetalleAnuncioPageModule {}
