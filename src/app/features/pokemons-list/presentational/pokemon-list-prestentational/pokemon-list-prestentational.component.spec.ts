import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListPrestentationalComponent } from './pokemon-list-prestentational.component';

describe('PokemonListPrestentationalComponent', () => {
  let component: PokemonListPrestentationalComponent;
  let fixture: ComponentFixture<PokemonListPrestentationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonListPrestentationalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonListPrestentationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
