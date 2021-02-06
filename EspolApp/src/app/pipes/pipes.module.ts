import { NgModule } from '@angular/core';
import { FiltroCursoPipe } from './filtro-curso.pipe';
import { FiltroUsuarioPipe } from './filtro-usuario.pipe';
import { FiltroPublicacionPipe } from './filtro-publicacion.pipe';
import { FiltroAnuncioPipe } from './filtro-anuncio.pipe';


@NgModule({
  declarations: [FiltroCursoPipe, FiltroUsuarioPipe, FiltroPublicacionPipe, FiltroAnuncioPipe],
  exports: [FiltroCursoPipe, FiltroUsuarioPipe, FiltroPublicacionPipe, FiltroAnuncioPipe]
})
export class PipesModule { }
