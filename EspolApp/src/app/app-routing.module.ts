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
    path: 'grupos-estudios',
    loadChildren: () => import('./folder/profesores/grupos-estudios/grupos-estudios.module').then( m => m.GruposEstudiosPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./folder/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'evaluaciones',
    loadChildren: () => import('./folder/profesores/evaluaciones/evaluaciones.module').then( m => m.EvaluacionesPageModule)
  },
  {
    path: 'recursos',
    loadChildren: () => import('./folder/profesores/recursos/recursos.module').then( m => m.RecursosPageModule)
  },
  {
    path: 'actividades',
    loadChildren: () => import('./folder/profesores/actividades/actividades.module').then( m => m.ActividadesPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./folder/registro/registro.module').then( m => m.RegistroPageModule)
  },


  //Estudiantes
  {
    path: 'grupos-estudios-estudiantes',
    loadChildren: () => import('./folder/estudiantes/grupos-estudios/grupos-estudios.module').then( m => m.GruposEstudiosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
