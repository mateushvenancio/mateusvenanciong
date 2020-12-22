import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreResumoComponent } from './sobre-resumo.component';

describe('SobreResumoComponent', () => {
  let component: SobreResumoComponent;
  let fixture: ComponentFixture<SobreResumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreResumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
