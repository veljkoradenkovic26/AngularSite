import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  linkovi:any;
  constructor(private service:MenuService) { }

  ngOnInit() {
    this.service.getMenuLinks().subscribe(data => {
      this.linkovi = data;
      console.log("stigao");
      console.log(data);
    });

  }

}
