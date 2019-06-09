import { Component, OnInit, Input } from '@angular/core';
import { Toping } from '../../model/toping';
import { of } from 'rxjs';

@Component({
  selector: 'pizza-topings',
  templateUrl: './pizza-topings.component.html',
  styleUrls: ['../../app.component.scss','./pizza-topings.component.scss']
})
export class PizzaTopingsComponent implements OnInit {
  @Input() 
  topings:Toping[];
  addClicked:boolean = false;
  topingsAvailable:Toping[];

  constructor() {
    of(this.getToppings()).subscribe(topings => {
      this.topingsAvailable = topings;
    });
  }

  ngOnInit() {
  }

  getToppings(){
    return [
      {id:4,name:"d"},
      {id:5,name:"e"},
      {id:6,name:"f"}];
  }

  addToping(){
    this.addClicked = true;
  }

  saveToping(){
    this.addClicked = false;
  }

  onDeleteClicked(toppingId:Toping){
    this.topings = this.topings.filter( item => item.id != toppingId);
  }
}
