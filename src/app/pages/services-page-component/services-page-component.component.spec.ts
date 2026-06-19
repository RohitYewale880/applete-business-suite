import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPageComponentComponent } from './services-page-component.component';

describe('ServicesPageComponentComponent', () => {
  let component: ServicesPageComponentComponent;
  let fixture: ComponentFixture<ServicesPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesPageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
