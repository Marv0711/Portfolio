import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardientHeroComponent } from './gardient-hero.component';

describe('GardientHeroComponent', () => {
  let component: GardientHeroComponent;
  let fixture: ComponentFixture<GardientHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GardientHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GardientHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
