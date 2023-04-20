import { Component } from '@angular/core';
import { WeaponsListService } from '../weapons-list.service';
import { Weapon } from '../interfaces/weapon.interface';

@Component({
  selector: 'app-weapons-list',
  templateUrl: './weapons-list.component.html',
  styleUrls: ['./weapons-list.component.css']
})
export class WeaponsListComponent {
  weaponsList: Weapon[] = [];

  constructor(private weaponsListService: WeaponsListService) {}

  ngOnInit() {
    this.weaponsListService.getWeapons().subscribe((res) => {
      this.weaponsList = this.weaponsListService.parseResponse(res);
    });
  }

  groupByType(): {[key: string]: Weapon[]} {
    const result: {[key: string]: Weapon[]} = {};
  
    for (const weapon of this.weaponsList) {
      if (result[weapon.type]) {
        result[weapon.type].push(weapon);
      } else {
        result[weapon.type] = [weapon];
      }
    }
  
    return result;
  }

  groupBySubtype(weapons: Weapon[]): {[key: string]: Weapon[]} {
    const result: {[key: string]: Weapon[]} = {};
  
    for (const weapon of weapons) {
      if (result[weapon.subtype]) {
        result[weapon.subtype].push(weapon);
      } else {
        result[weapon.subtype] = [weapon];
      }
    }
  
    return result;
  }
}
