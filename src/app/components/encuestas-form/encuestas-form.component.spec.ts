import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestasFormComponent } from './encuestas-form.component';

describe('EncuestasFormComponent', () => {
  let component: EncuestasFormComponent;
  let fixture: ComponentFixture<EncuestasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
