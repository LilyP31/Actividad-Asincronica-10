import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteC04Component } from './componente-c04.component';

describe('ComponenteC04Component', () => {
  let component: ComponenteC04Component;
  let fixture: ComponentFixture<ComponenteC04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteC04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteC04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
