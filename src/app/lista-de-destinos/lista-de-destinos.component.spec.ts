import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeDestinosComponent } from './lista-de-destinos.component';

describe('ListaDeDestinosComponent', () => {
  let component: ListaDeDestinosComponent;
  let fixture: ComponentFixture<ListaDeDestinosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDeDestinosComponent]
    });
    fixture = TestBed.createComponent(ListaDeDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
