import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaEncuestaComponent } from './crea-encuesta.component';

describe('CreaEncuestaComponent', () => {
  let component: CreaEncuestaComponent;
  let fixture: ComponentFixture<CreaEncuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaEncuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
