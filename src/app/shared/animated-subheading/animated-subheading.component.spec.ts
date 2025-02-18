import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedSubheadingComponent } from './animated-subheading.component';

describe('AnimatedSubheadingComponent', () => {
  let component: AnimatedSubheadingComponent;
  let fixture: ComponentFixture<AnimatedSubheadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedSubheadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimatedSubheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
