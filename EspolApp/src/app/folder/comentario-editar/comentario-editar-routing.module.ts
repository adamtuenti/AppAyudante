import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComentarioEditarPage } from './comentario-editar.page';

const routes: Routes = [
  {
    path: '',
    component: ComentarioEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComentarioEditarPageRoutingModule {}
