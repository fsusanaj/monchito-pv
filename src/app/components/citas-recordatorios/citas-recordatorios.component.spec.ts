import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasRecordatoriosComponent } from './citas-recordatorios.component';

describe('CitasRecordatoriosComponent', () => {
  let component: CitasRecordatoriosComponent;
  let fixture: ComponentFixture<CitasRecordatoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitasRecordatoriosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitasRecordatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
