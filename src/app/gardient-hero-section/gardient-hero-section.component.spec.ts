import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardientHeroSectionComponent } from './gardient-hero-section.component';

describe('GardientHeroSectionComponent', () => {
  let component: GardientHeroSectionComponent;
  let fixture: ComponentFixture<GardientHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GardientHeroSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GardientHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
