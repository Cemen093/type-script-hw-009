import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WeaponComponent } from './weapon/weapon.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WeaponRoutingModule } from './weapon-routing.module';
import { WeaponsListService } from '../weapons-list/weapons-list.service';



@NgModule({
  declarations: [
    WeaponComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    WeaponRoutingModule,
  ],
  providers: [
    WeaponsListService
  ]
})
export class WeaponModule { }
