import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCabeceraComponent } from './bcabecera.component';

describe('BCabeceraComponent', () => {
  let component: BCabeceraComponent;
  let fixture: ComponentFixture<BCabeceraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCabeceraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
