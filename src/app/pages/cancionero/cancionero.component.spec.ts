import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancioneroComponent } from './cancionero.component';

describe('CancioneroComponent', () => {
  let component: CancioneroComponent;
  let fixture: ComponentFixture<CancioneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancioneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancioneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
