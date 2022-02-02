import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigueParticipandoComponent } from './sigue-participando.component';

describe('SigueParticipandoComponent', () => {
  let component: SigueParticipandoComponent;
  let fixture: ComponentFixture<SigueParticipandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigueParticipandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigueParticipandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
