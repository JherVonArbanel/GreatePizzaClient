import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaTopingsComponent } from './pizza-topings.component';

describe('PizzaTopingsComponent', () => {
  let component: PizzaTopingsComponent;
  let fixture: ComponentFixture<PizzaTopingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaTopingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaTopingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
