import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteC02Component } from './componente-c02.component';

describe('ComponenteC02Component', () => {
  let component: ComponenteC02Component;
  let fixture: ComponentFixture<ComponenteC02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteC02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteC02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
