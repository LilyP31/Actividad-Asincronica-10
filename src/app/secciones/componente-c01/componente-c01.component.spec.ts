import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteC01Component } from './componente-c01.component';

describe('ComponenteC01Component', () => {
  let component: ComponenteC01Component;
  let fixture: ComponentFixture<ComponenteC01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteC01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteC01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
