import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weapon } from '../../weapons-list/interfaces/weapon.interface';
import { WeaponsListService } from '../../weapons-list/weapons-list.service';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent {
  id: number;
  weapon: Weapon ={id: 0, type:"",subtype:"",title:"",description:"",urlImg:""};

  constructor(private activateRoute: ActivatedRoute, private weaponsListService: WeaponsListService){
      this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.weaponsListService.getWeapons().subscribe((res) => {
      this.weapon = this.weaponsListService.getById(this.id, this.weaponsListService.parseResponse(res));
    });
  }
}
