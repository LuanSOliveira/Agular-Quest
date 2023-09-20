import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHeroComponent } from './select-hero.component';

describe('SelectHeroComponent', () => {
  let component: SelectHeroComponent;
  let fixture: ComponentFixture<SelectHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectHeroComponent]
    });
    fixture = TestBed.createComponent(SelectHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
