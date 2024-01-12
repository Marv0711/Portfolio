import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPolicySectionComponent } from './my-policy-section.component';

describe('MyPolicySectionComponent', () => {
  let component: MyPolicySectionComponent;
  let fixture: ComponentFixture<MyPolicySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyPolicySectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyPolicySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
