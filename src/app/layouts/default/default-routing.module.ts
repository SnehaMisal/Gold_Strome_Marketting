import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
const routes: Routes = [
  {
    path: 'admin',
    component: IndexComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../views/views.module').then(m => m.ViewsModule),
      }
    ]
  },
  {
    path: 'ceo',
    component: IndexComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../ceo/ceo.module').then(m => m.CeoModule),
      }
    ]
  },
  {
    path: 'gm',
    component: IndexComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../gm/gm.module').then(m => m.GmModule),
      }
    ]
  },

  {
    path: 'dsm',
    component: IndexComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../dsm/dsm.module').then(m => m.DsmModule),
      }
    ]
  },
  {
    path: 'sm',
    component: IndexComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../sm/sm.module').then(m => m.SmModule),
      }
    ]
  },
  {
    path: 'sa',
    component: IndexComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../sa/sa.module').then(m => m.SaModule),
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
