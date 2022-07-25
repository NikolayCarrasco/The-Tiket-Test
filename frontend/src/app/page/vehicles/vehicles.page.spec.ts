import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Vehicles } from './vehicles.page';

describe('Tab1Page', () => {
  let component: Vehicles;
  let fixture: ComponentFixture<Vehicles>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Vehicles]
    }).compileComponents();

    fixture = TestBed.createComponent(Vehicles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
