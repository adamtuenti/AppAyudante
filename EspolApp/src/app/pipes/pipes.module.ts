import { NgModule } from '@angular/core';
import { FiltroCursoPipe } from './filtro-curso.pipe';
import { FiltroUsuarioPipe } from './filtro-usuario.pipe';
import { FiltroPublicacionPipe } from './filtro-publicacion.pipe';
import { FiltroAnuncioPipe } from './filtro-anuncio.pipe';
import { FiltroComentariosPipe } from './filtro-comentarios.pipe';


@NgModule({
  declarations: [FiltroCursoPipe, FiltroUsuarioPipe, FiltroPublicacionPipe, FiltroAnuncioPipe, FiltroComentariosPipe],
  exports: [FiltroCursoPipe, FiltroUsuarioPipe, FiltroPublicacionPipe, FiltroAnuncioPipe, FiltroComentariosPipe]
})
export class PipesModule { }
