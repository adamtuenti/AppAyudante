import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComentarioCrearPage } from './comentario-crear.page';

const routes: Routes = [
  {
    path: '',
    component: ComentarioCrearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComentarioCrearPageRoutingModule {}
