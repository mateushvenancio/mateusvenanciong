import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosProjetosComponent } from './ultimos-projetos.component';

describe('UltimosProjetosComponent', () => {
  let component: UltimosProjetosComponent;
  let fixture: ComponentFixture<UltimosProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimosProjetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimosProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
