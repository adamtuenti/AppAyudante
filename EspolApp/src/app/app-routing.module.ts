import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./folder/login/login.module').then( m => m.LoginPageModule)
  },
 
  {
    path: 'perfil',
    loadChildren: () => import('./folder/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./folder/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./folder/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./folder/cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'curso-detalle/:id',
    loadChildren: () => import('./folder/curso-detalle/curso-detalle.module').then( m => m.CursoDetallePageModule)
  },
  {
    path: 'publicaciones',
    loadChildren: () => import('./folder/publicaciones/publicaciones.module').then( m => m.PublicacionesPageModule)
  },
  {
    path: 'usuario-detalle/:id',
    loadChildren: () => import('./folder/usuario-detalle/usuario-detalle.module').then( m => m.UsuarioDetallePageModule)
  },
  {
    path: 'publicaciones-materia',
    loadChildren: () => import('./folder/publicaciones-materia/publicaciones-materia.module').then( m => m.PublicacionesMateriaPageModule)
  },
  {
    path: 'perfil-update',
    loadChildren: () => import('./folder/perfil-update/perfil-update.module').then( m => m.PerfilUpdatePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
