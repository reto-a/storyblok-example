import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BTarjetasComponent } from './btarjetas.component';

describe('BTarjetasComponent', () => {
  let component: BTarjetasComponent;
  let fixture: ComponentFixture<BTarjetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BTarjetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
