import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeaponComponent } from './weapon/weapon.component';

const routes: Routes = [
  {
    path: '',
    component: WeaponComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeaponRoutingModule { }
