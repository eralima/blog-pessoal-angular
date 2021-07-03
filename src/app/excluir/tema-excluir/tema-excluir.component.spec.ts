import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaExcluirComponent } from './tema-excluir.component';

describe('TemaExcluirComponent', () => {
  let component: TemaExcluirComponent;
  let fixture: ComponentFixture<TemaExcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaExcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
