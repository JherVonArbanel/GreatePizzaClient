import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../../model/pizza';

@Component({
  selector: 'pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  @Input() 
  pizza: Pizza;

  constructor() {
  }

  ngOnInit() {
  }
}
