import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SCuentaComponent } from './scuenta.component';

describe('SCuentaComponent', () => {
  let component: SCuentaComponent;
  let fixture: ComponentFixture<SCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
