import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedsComponent } from './likeds.component';

describe('LikedsComponent', () => {
  let component: LikedsComponent;
  let fixture: ComponentFixture<LikedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikedsComponent]
    });
    fixture = TestBed.createComponent(LikedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
