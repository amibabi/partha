import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiListComponent } from './hobbi-list.component';

describe('HobbiListComponent', () => {
  let component: HobbiListComponent;
  let fixture: ComponentFixture<HobbiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
