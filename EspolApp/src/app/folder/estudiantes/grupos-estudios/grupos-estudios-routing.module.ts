import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GruposEstudiosPage } from './grupos-estudios.page';

const routes: Routes = [
  {
    path: '',
    component: GruposEstudiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GruposEstudiosPageRoutingModule {}
