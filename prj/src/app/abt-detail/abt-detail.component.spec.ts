import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtDetailComponent } from './abt-detail.component';

describe('AbtDetailComponent', () => {
  let component: AbtDetailComponent;
  let fixture: ComponentFixture<AbtDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbtDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbtDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
