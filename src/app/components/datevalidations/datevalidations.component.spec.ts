import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatevalidationsComponent } from './datevalidations.component';

describe('DatevalidationsComponent', () => {
  let component: DatevalidationsComponent;
  let fixture: ComponentFixture<DatevalidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatevalidationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatevalidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
