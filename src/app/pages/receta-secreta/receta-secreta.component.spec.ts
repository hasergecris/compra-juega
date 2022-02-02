import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaSecretaComponent } from './receta-secreta.component';

describe('RecetaSecretaComponent', () => {
  let component: RecetaSecretaComponent;
  let fixture: ComponentFixture<RecetaSecretaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetaSecretaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaSecretaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
