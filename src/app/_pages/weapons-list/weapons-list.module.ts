import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WeaponsListComponent } from './weapons-list/weapons-list.component'; 
import { WeaponsListRoutingModule } from './weapons-list-routing.module';
import { WeaponsListService } from './weapons-list.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { GroupByPipe } from 'src/app/group-by.pipe';



@NgModule({
  declarations: [
    WeaponsListComponent,
    GroupByPipe
  ],
  imports: [
    CommonModule,
    WeaponsListRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    WeaponsListService
  ]
})
export class WeaponsListModule { }
