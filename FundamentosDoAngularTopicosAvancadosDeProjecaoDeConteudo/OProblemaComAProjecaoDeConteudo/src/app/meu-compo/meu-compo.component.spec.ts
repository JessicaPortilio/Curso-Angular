import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuCompoComponent } from './meu-compo.component';

describe('MeuCompoComponent', () => {
  let component: MeuCompoComponent;
  let fixture: ComponentFixture<MeuCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuCompoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
