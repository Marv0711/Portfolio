import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressumSectionComponent } from './impressum-section.component';

describe('ImpressumSectionComponent', () => {
  let component: ImpressumSectionComponent;
  let fixture: ComponentFixture<ImpressumSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImpressumSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImpressumSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
