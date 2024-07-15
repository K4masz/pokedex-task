import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { CardsFacade } from '../../../../core/state/cards/cards.facade';
import { SubTypesFacade } from '../../../../core/state/subtypes/sub-types.facade';
import { SuperTypesFacade } from '../../../../core/state/supertypes/super-types.facade';
import { TypesFacade } from '../../../../core/state/types/types.facade';
import { FiltersComponent, FilterValues } from '../../presentational/filters/filters.component';
import { PokemonListPrestentationalComponent } from "../../presentational/pokemon-list-prestentational/pokemon-list-prestentational.component";

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonListPrestentationalComponent, CommonModule, FiltersComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  typesFacade = inject(TypesFacade);
  superTypesFacade = inject(SuperTypesFacade);
  subTypesFacade = inject(SubTypesFacade);

  cardsFacade = inject(CardsFacade);

  dataSource$ = this.cardsFacade.selectCurrentPageAsDatasource$;
  currentPageNumber$ = this.cardsFacade.currentPageNumber$;

  types$: Observable<string[]> = this.typesFacade.types$;
  superTypes$: Observable<string[]> = this.superTypesFacade.superTypes$;
  subTypes$: Observable<string[]> = this.subTypesFacade.subTypes$;

  onPageChange(event: PageEvent) {
   this.cardsFacade.changePage(event.pageIndex+1)
  }

  onFiltersValueChange(event: FilterValues) {
    const filterValues = this.parseFilterValues(event);
    console.log(event, filterValues);
  }

  private parseFilterValues(filterValues: FilterValues) {
    const collector: string[] = [];

    for (const filter in filterValues) {
      let value = filterValues[filter as keyof FilterValues]

      if (!value) {
        continue;
      }

      if (typeof value === 'string') {
        value = [value] as string[];
      }

      let mapped = value.map((value: string) => `${filter}:${value}`).join(' OR ')
      if (value.length > 1) {
        mapped = `(${mapped})`
      }

      collector.push(mapped)
    }

    return collector.join(' ')
  }
}
