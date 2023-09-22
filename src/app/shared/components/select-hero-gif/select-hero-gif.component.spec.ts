import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHeroGifComponent } from './select-hero-gif.component';

describe('SelectHeroGifComponent', () => {
  let component: SelectHeroGifComponent;
  let fixture: ComponentFixture<SelectHeroGifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectHeroGifComponent]
    });
    fixture = TestBed.createComponent(SelectHeroGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
