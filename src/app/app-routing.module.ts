import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./_pages/weapons-list/weapons-list.module').then(m => m.WeaponsListModule)
  },
  {
    path: 'weapon/:id',
    loadChildren: () => import('./_pages/weapon/weapon-routing.module').then(m => m.WeaponRoutingModule)
  },
  { 
    path: '**', 
    redirectTo: '/NotFound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
