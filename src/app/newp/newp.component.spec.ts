import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpComponent } from './newp.component';

describe('NewpComponent', () => {
  let component: NewpComponent;
  let fixture: ComponentFixture<NewpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewpComponent]
    });
    fixture = TestBed.createComponent(NewpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
