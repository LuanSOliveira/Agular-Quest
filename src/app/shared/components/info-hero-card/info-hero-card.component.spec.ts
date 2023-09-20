import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHeroCardComponent } from './info-hero-card.component';

describe('InfoHeroCardComponent', () => {
  let component: InfoHeroCardComponent;
  let fixture: ComponentFixture<InfoHeroCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoHeroCardComponent]
    });
    fixture = TestBed.createComponent(InfoHeroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
