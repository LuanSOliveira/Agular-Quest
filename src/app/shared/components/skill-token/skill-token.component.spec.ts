import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTokenComponent } from './skill-token.component';

describe('SkillTokenComponent', () => {
  let component: SkillTokenComponent;
  let fixture: ComponentFixture<SkillTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillTokenComponent]
    });
    fixture = TestBed.createComponent(SkillTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
