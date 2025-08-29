import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slice } from './slice';

describe('Slice', () => {
  let component: Slice;
  let fixture: ComponentFixture<Slice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Slice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Slice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
