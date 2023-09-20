import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeroButtonComponent } from './add-hero-button.component';

describe('AddHeroButtonComponent', () => {
  let component: AddHeroButtonComponent;
  let fixture: ComponentFixture<AddHeroButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHeroButtonComponent]
    });
    fixture = TestBed.createComponent(AddHeroButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
