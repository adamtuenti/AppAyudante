import { NgModule } from '@angular/core';
import { FiltroCursoPipe } from './filtro-curso.pipe';
import { FiltroUsuarioPipe } from './filtro-usuario.pipe';


@NgModule({
  declarations: [FiltroCursoPipe, FiltroUsuarioPipe],
  exports: [FiltroCursoPipe, FiltroUsuarioPipe]
})
export class PipesModule { }
