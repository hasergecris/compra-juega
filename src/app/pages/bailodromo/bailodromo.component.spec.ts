import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BailodromoComponent } from './bailodromo.component';

describe('BailodromoComponent', () => {
  let component: BailodromoComponent;
  let fixture: ComponentFixture<BailodromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BailodromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BailodromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
