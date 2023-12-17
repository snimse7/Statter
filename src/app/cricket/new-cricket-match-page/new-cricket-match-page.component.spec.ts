import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCricketMatchPageComponent } from './new-cricket-match-page.component';

describe('NewCricketMatchPageComponent', () => {
  let component: NewCricketMatchPageComponent;
  let fixture: ComponentFixture<NewCricketMatchPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCricketMatchPageComponent]
    });
    fixture = TestBed.createComponent(NewCricketMatchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
