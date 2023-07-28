import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondScreenComponent } from './second-screen.component';

describe('SecondScreenComponent', () => {
  let component: SecondScreenComponent;
  let fixture: ComponentFixture<SecondScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SecondScreenComponent]
    });
    fixture = TestBed.createComponent(SecondScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
