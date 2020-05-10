import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiCreateComponent } from './hobbi-create.component';

describe('HobbiCreateComponent', () => {
  let component: HobbiCreateComponent;
  let fixture: ComponentFixture<HobbiCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbiCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
