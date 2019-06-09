import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Toping } from 'src/app/model/toping';

@Component({
  selector: 'toping',
  templateUrl: './toping.component.html',
  styleUrls: ['../../app.component.scss','./toping.component.scss']
})
export class TopingComponent implements OnInit {
  @Input() 
  toping: Toping;

  @Output() 
  onDeleteClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteToping(toping){
    this.onDeleteClick.emit(toping.id);
  }
}
