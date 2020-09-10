import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancedocstableComponent } from './financedocstable.component';

describe('FinancedocstableComponent', () => {
  let component: FinancedocstableComponent;
  let fixture: ComponentFixture<FinancedocstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancedocstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancedocstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
