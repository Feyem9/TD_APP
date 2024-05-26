import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpostComponent } from './epost.component';

describe('EpostComponent', () => {
  let component: EpostComponent;
  let fixture: ComponentFixture<EpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpostComponent]
    });
    fixture = TestBed.createComponent(EpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
