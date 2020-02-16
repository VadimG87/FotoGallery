import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOneComponent } from './nav-one.component';

describe('NavOneComponent', () => {
  let component: NavOneComponent;
  let fixture: ComponentFixture<NavOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
