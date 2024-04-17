import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDisplayComponent } from './pet-display.component';

describe('PetDisplayComponent', () => {
  let component: PetDisplayComponent;
  let fixture: ComponentFixture<PetDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
