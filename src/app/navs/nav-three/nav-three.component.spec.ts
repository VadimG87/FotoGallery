import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavThreeComponent } from './nav-three.component';

describe('NavThreeComponent', () => {
  let component: NavThreeComponent;
  let fixture: ComponentFixture<NavThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
