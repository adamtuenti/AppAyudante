import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePublicidadPageRoutingModule } from './detalle-publicidad-routing.module';

import { DetallePublicidadPage } from './detalle-publicidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePublicidadPageRoutingModule
  ],
  declarations: [DetallePublicidadPage]
})
export class DetallePublicidadPageModule {}
