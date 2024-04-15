import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./login-register/login-register.module').then(m => m.LoginRegisterModule) },
  { path: '', loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule), },
  { path: 'admin', loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)},
  { path: 'ceo', loadChildren: () => import('./ceo/ceo.module').then(m => m.CeoModule)},
  { path: 'gm', loadChildren: () => import('./gm/gm.module').then(m => m.GmModule)},
  { path: 'dsm', loadChildren: () => import('./dsm/dsm.module').then(m => m.DsmModule) },
  { path: 'sm', loadChildren: () => import('./sm/sm.module').then(m => m.SmModule) },
  { path: 'sa', loadChildren: () => import('./sa/sa.module').then(m => m.SaModule) },
   { path: '**', redirectTo: '/login'  }
];
// canActivate: [AuthGuard]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true, // Debuging Only
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
