import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterGardientHeroSectionComponent } from './better-gardient-hero-section.component';

describe('BetterGardientHeroSectionComponent', () => {
  let component: BetterGardientHeroSectionComponent;
  let fixture: ComponentFixture<BetterGardientHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BetterGardientHeroSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BetterGardientHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
