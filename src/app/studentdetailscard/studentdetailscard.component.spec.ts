import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdetailscardComponent } from './studentdetailscard.component';

describe('StudentdetailscardComponent', () => {
  let component: StudentdetailscardComponent;
  let fixture: ComponentFixture<StudentdetailscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentdetailscardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdetailscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
