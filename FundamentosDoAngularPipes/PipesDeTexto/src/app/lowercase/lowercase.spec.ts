import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lowercase } from './lowercase';

describe('Lowercase', () => {
  let component: Lowercase;
  let fixture: ComponentFixture<Lowercase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lowercase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lowercase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
