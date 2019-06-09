import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/model/pizza';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  pizzas : Pizza[] = [{
    name: "test",
    topings: [
      {id:1,name:"a"},
      {id:2,name:"b"},
      {id:3,name:"c"}]
  }];

  constructor() { }

  ngOnInit() {
  }

}
