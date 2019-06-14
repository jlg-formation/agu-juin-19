import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzComponent } from './quizz.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('QuizzComponent', () => {
  let component: QuizzComponent;
  let fixture: ComponentFixture<QuizzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [ QuizzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
