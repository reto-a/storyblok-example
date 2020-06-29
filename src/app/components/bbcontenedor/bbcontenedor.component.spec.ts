import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBContenedorComponent } from './bbcontenedor.component';

describe('BBContenedorComponent', () => {
  let component: BBContenedorComponent;
  let fixture: ComponentFixture<BBContenedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBContenedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
