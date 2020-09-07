import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesspasswordpageComponent } from './successpasswordpage.component';

describe('SuccesspasswordpageComponent', () => {
  let component: SuccesspasswordpageComponent;
  let fixture: ComponentFixture<SuccesspasswordpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesspasswordpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesspasswordpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
