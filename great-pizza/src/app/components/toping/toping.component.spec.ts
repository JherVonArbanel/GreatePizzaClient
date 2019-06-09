import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopingComponent } from './toping.component';

describe('TopingComponent', () => {
  let component: TopingComponent;
  let fixture: ComponentFixture<TopingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
