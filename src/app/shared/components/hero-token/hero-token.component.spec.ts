import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTokenComponent } from './hero-token.component';

describe('HeroTokenComponent', () => {
  let component: HeroTokenComponent;
  let fixture: ComponentFixture<HeroTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroTokenComponent]
    });
    fixture = TestBed.createComponent(HeroTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
