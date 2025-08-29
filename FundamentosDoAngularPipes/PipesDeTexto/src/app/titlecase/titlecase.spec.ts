import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Titlecase } from './titlecase';

describe('Titlecase', () => {
  let component: Titlecase;
  let fixture: ComponentFixture<Titlecase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Titlecase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Titlecase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
