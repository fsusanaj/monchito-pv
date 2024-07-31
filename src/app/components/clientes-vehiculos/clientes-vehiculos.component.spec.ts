import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesVehiculosComponent } from './clientes-vehiculos.component';

describe('ClientesVehiculosComponent', () => {
  let component: ClientesVehiculosComponent;
  let fixture: ComponentFixture<ClientesVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientesVehiculosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientesVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
