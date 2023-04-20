import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Weapon } from './interfaces/weapon.interface';
import { Expression } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class WeaponsListService {

  constructor(private http: HttpClient) { }

  getWeapons() {
    return this.http.get("assets/weapons.json");
  }

  parseResponse(res: any) {
    return res["weapons"];
  }

  getById(id:number, weapons: Weapon[]){
    for(let weapon of weapons) {
      if (weapon.id === id){
        return weapon;
      }
    }
    throw Expression;
  }
}
