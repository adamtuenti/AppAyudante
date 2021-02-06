import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisAyudantiasPageRoutingModule } from './mis-ayudantias-routing.module';

import { MisAyudantiasPage } from './mis-ayudantias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisAyudantiasPageRoutingModule
  ],
  declarations: [MisAyudantiasPage]
})
export class MisAyudantiasPageModule {}
