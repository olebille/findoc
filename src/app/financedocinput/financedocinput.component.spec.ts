import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancedocinputComponent } from './financedocinput.component';

describe('FinancedocinputComponent', () => {
  let component: FinancedocinputComponent;
  let fixture: ComponentFixture<FinancedocinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancedocinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancedocinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
