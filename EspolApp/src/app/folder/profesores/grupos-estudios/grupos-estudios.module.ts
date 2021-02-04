import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GruposEstudiosPageRoutingModule } from './grupos-estudios-routing.module';

import { GruposEstudiosPage } from './grupos-estudios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GruposEstudiosPageRoutingModule
  ],
  declarations: [GruposEstudiosPage]
})
export class GruposEstudiosPageModule {}
