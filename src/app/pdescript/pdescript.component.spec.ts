import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdescriptComponent } from './pdescript.component';

describe('PdescriptComponent', () => {
  let component: PdescriptComponent;
  let fixture: ComponentFixture<PdescriptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdescriptComponent]
    });
    fixture = TestBed.createComponent(PdescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
