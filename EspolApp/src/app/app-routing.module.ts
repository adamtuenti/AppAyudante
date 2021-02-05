import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {NoLoginGuard} from './guards/no-login.guard';
import {AuthGuard} from './guards/auth.guard';
import {PendienteGuard} from './guards/pendiente.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./folder/login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoLoginGuard]
  },
 
  {
    path: 'perfil',
    loadChildren: () => import('./folder/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./folder/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate:[NoLoginGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./folder/home/home.module').then( m => m.HomePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'cursos',
    loadChildren: () => import('./folder/cursos/cursos.module').then( m => m.CursosPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'curso-detalle/:id/:nombre',
    loadChildren: () => import('./folder/curso-detalle/curso-detalle.module').then( m => m.CursoDetallePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'publicaciones',
    loadChildren: () => import('./folder/publicaciones/publicaciones.module').then( m => m.PublicacionesPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'usuario-detalle/:id',
    loadChildren: () => import('./folder/usuario-detalle/usuario-detalle.module').then( m => m.UsuarioDetallePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'publicaciones-materia',
    loadChildren: () => import('./folder/publicaciones-materia/publicaciones-materia.module').then( m => m.PublicacionesMateriaPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'perfil-update',
    loadChildren: () => import('./folder/perfil-update/perfil-update.module').then( m => m.PerfilUpdatePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'crear-publicacion',
    loadChildren: () => import('./folder/crear-publicacion/crear-publicacion.module').then( m => m.CrearPublicacionPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'mis-publicaciones',
    loadChildren: () => import('./folder/mis-publicaciones/mis-publicaciones.module').then( m => m.MisPublicacionesPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'curso-ayudantes/:id/:nombre',
    loadChildren: () => import('./folder/curso-ayudantes/curso-ayudantes.module').then( m => m.CursoAyudantesPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'curso-detalle-anuncio/:id',
    loadChildren: () => import('./folder/curso-detalle-anuncio/curso-detalle-anuncio.module').then( m => m.CursoDetalleAnuncioPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'pendiente',
    loadChildren: () => import('./folder/pendiente/pendiente.module').then( m => m.PendientePageModule),
    canActivate:[PendienteGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
