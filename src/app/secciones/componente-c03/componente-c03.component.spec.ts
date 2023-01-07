import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteC03Component } from './componente-c03.component';

describe('ComponenteC03Component', () => {
  let component: ComponenteC03Component;
  let fixture: ComponentFixture<ComponenteC03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteC03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteC03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
