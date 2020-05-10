import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiEditComponent } from './hobbi-edit.component';

describe('HobbiEditComponent', () => {
  let component: HobbiEditComponent;
  let fixture: ComponentFixture<HobbiEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbiEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
