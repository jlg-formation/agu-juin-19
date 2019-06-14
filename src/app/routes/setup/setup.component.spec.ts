import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupComponent } from './setup.component';
import { RouterTestingModule } from '@angular/router/testing';
import { QuizzService } from 'src/app/quizz.service';

describe('SetupComponent', () => {
  let component: SetupComponent;
  let fixture: ComponentFixture<SetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ SetupComponent ],
      providers: [{
        provide: QuizzService, useValue: {
          progress: {
            questionId: 0
          },
          current: {
            questions: [{
            }]
          }
        }
      }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
