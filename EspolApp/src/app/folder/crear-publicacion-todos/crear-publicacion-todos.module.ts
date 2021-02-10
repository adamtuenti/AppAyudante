import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearPublicacionTodosPageRoutingModule } from './crear-publicacion-todos-routing.module';

import { CrearPublicacionTodosPage } from './crear-publicacion-todos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearPublicacionTodosPageRoutingModule
  ],
  declarations: [CrearPublicacionTodosPage]
})
export class CrearPublicacionTodosPageModule {}
