import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketLandingPageComponent } from './cricket-landing-page.component';

describe('CricketLandingPageComponent', () => {
  let component: CricketLandingPageComponent;
  let fixture: ComponentFixture<CricketLandingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CricketLandingPageComponent]
    });
    fixture = TestBed.createComponent(CricketLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
