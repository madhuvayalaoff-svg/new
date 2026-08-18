import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeInterface } from './practice-interface';

describe('PracticeInterface', () => {
  let component: PracticeInterface;
  let fixture: ComponentFixture<PracticeInterface>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeInterface],
    }).compileComponents();

    fixture = TestBed.createComponent(PracticeInterface);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
