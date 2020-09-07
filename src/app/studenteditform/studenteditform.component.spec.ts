import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenteditformComponent } from './studenteditform.component';

describe('StudenteditformComponent', () => {
  let component: StudenteditformComponent;
  let fixture: ComponentFixture<StudenteditformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudenteditformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenteditformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
