import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private service: HttpClient) { 

  }

  getMenuLinks(){
    var menuLinks=this.service.get("http://localhost:4200/assets/jsons/menu.json");
    return menuLinks;
  }
}
