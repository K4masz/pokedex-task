import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsPresentationalComponent } from './pokemon-details-presentational.component';

describe('PokemonDetailsPresentationalComponent', () => {
  let component: PokemonDetailsPresentationalComponent;
  let fixture: ComponentFixture<PokemonDetailsPresentationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetailsPresentationalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsPresentationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
